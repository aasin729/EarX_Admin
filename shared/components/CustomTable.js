import DataTable from 'react-data-table-component';
import { TablePagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import {
  HiChevronDoubleRight,
  HiChevronRight,
  HiChevronLeft,
  HiChevronDoubleLeft,
} from 'react-icons/hi';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import useFetch from '../hooks/useFetch';

const paginationComponentOptions = {
  rowsPerPageText: '목록 보기',
  rangeSeparatorText: '/',
};

const CustomTable = ({
  columns,
  data,
  setData,
  toggleCleared,
  selectableRows,
  setSelectedRows,
  fixedHeader,
  fixedHeight,
  url,
  parameter = '',
  noDataClassName,
  noChangePerPage,
  simpleStyle,
  rowClick,
  noPagination,
  ...props
}) => {
  const handleRowSelected = (state) => {
    selectableRows && setSelectedRows(state.selectedRows);
  };

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const [sortField, setSortField] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('desc');

  const { getAction } = useFetch();

  const fetchData = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await getAction(
        `${url(
          currentPage * perPage,
          perPage,
          sortField,
          sortDirection,
        )}${parameter}`,
      );
      setData(response.data);
      setTotalRows(response.total_count);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
    // fetchData();
  }, [currentPage, sortField, sortDirection, parameter, perPage]);

  const handleSort = async (column, sortDirection) => {
    if (column.sortField) {
      setSortField(column.sortField);
      setSortDirection(sortDirection);
    }
  };

  return (
    <DataTable
      className="customTable"
      columns={columns}
      data={data}
      sortServer
      onSort={handleSort}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      selectableRows={selectableRows ?? false}
      pagination={!noPagination}
      paginationComponent={(paginationProps) =>
        paginationComponent({ ...paginationProps, noChangePerPage })
      }
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      noDataComponent={
        <div className={`text-center py-5 ${noDataClassName ?? ''}`}>
          <MdOutlineImageNotSupported className="fs-2 text-secondary" />
          <p className="fw-bold pt-3">데이터가 없습니다.</p>
        </div>
      }
      progressPending={loading}
      progressComponent={
        <div className="min-h-300px d-flex align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      }
      paginationComponentOptions={paginationComponentOptions}
      fixedHeader={fixedHeader}
      fixedHeaderScrollHeight={fixedHeight ?? null}
      noChangePerPage={noChangePerPage}
      dense
      pointerOnHover={!simpleStyle}
      highlightOnHover={!simpleStyle}
      customStyles={simpleStyle ? simpleStyles : customStyles}
      onRowClicked={
        simpleStyle
          ? undefined
          : (row) => {
              rowClick(row.id);
            }
      }
      {...props}
    />
  );
};

const paginationComponent = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
  noChangePerPage,
}) => {
  return (
    <TablePagination
      component="nav"
      count={rowCount}
      labelRowsPerPage={noChangePerPage ? '' : '목록 보기'}
      rowsPerPageOptions={noChangePerPage ? [] : [10, 30, 50]}
      rowsPerPage={rowsPerPage}
      page={currentPage - 1}
      onPageChange={onChangePage}
      onRowsPerPageChange={({ target }) =>
        onChangeRowsPerPage(Number(target.value))
      }
      ActionsComponent={() => (
        <TablePaginationActions
          count={rowCount}
          page={currentPage - 1}
          rowsPerPage={rowsPerPage}
          onChangePage={onChangePage}
        />
      )}
    />
  );
};

const getNumberOfPages = (count, per) => {
  return Math.ceil(count / per);
};

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
  const handleFirstPageButtonClick = () => {
    onChangePage(1);
  };

  const handleBackButtonClick = () => {
    onChangePage(page);
  };

  const handleNextButtonClick = () => {
    onChangePage(page + 2);
  };

  const handleLastPageButtonClick = () => {
    onChangePage(getNumberOfPages(count, rowsPerPage));
  };

  return (
    <>
      <Button
        variant=""
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <HiChevronDoubleLeft className="fs-4" />
      </Button>
      <Button
        variant=""
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <HiChevronLeft className="fs-3" />
      </Button>
      <div className="d-flex gap-2 align-items-center">
        {count > 0 &&
          (() => {
            const totalPages = Math.ceil(count / rowsPerPage);
            const pageButtonsToShow = 4;
            const startPage = Math.max(
              1,
              Math.min(
                totalPages - pageButtonsToShow + 1,
                page + 1 - Math.floor(pageButtonsToShow / 2),
              ),
            );
            const endPage = Math.min(
              totalPages,
              startPage + pageButtonsToShow - 1,
            );
            const pages = [];

            // 첫 페이지 버튼
            if (startPage > 1) {
              pages.push(
                <Button
                  key="button_1"
                  onClick={() => onChangePage(1)}
                  variant="light"
                  className={1 === page + 1 ? 'active fw-bold text-dark' : ''}
                >
                  1
                </Button>,
              );
              if (startPage > 2) {
                pages.push(
                  <span key="ellipsis_start" className="me-2 my-1">
                    ...
                  </span>,
                );
              }
            }

            // 페이지 번호 버튼들
            for (let pageIndex = startPage; pageIndex <= endPage; pageIndex++) {
              pages.push(
                <Button
                  key={`button_${pageIndex}`}
                  onClick={() => onChangePage(pageIndex)}
                  variant="light"
                  className={
                    pageIndex === page + 1 ? 'active fw-bold text-dark' : ''
                  }
                >
                  {pageIndex}
                </Button>,
              );
            }

            // 마지막 페이지 버튼
            if (endPage < totalPages) {
              if (endPage < totalPages - 1) {
                pages.push(
                  <span key="ellipsis_end" className="me-2 my-1">
                    ...
                  </span>,
                );
              }
              pages.push(
                <Button
                  key={`button_${totalPages}`}
                  onClick={() => onChangePage(totalPages)}
                  variant="light"
                  className={
                    totalPages === page + 1 ? 'active fw-bold text-dark' : ''
                  }
                >
                  {totalPages}
                </Button>,
              );
            }

            return pages;
          })()}
      </div>
      <Button
        variant=""
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <HiChevronRight className="fs-3" />
      </Button>
      <Button
        variant=""
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <HiChevronDoubleRight className="fs-4" />
      </Button>
    </>
  );
}

const customStyles = {
  table: {
    style: {
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: '#efefef',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: '#efefef',
      backgroundColor: '#f8f9fa',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#efefef',
      },
      minHeight: '36px',
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#efefef',
      },
      minHeight: '56px',
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: '#f8f9fa',
      transitionDuration: '0.15s',
      transitionProperty: 'background-color',
    },
  },
};

const simpleStyles = {
  headCells: {
    style: {
      minHeight: '32px',
    },
  },
  cells: {
    style: {
      minHeight: '42px',
    },
  },
};

export default CustomTable;
