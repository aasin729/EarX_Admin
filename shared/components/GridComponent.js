import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import SelectBox from './SelectBox';
import { SecondaryButton } from '../layout-components/styles/button';
import { Flex } from '../layout-components/spaces/Flex';
import { Height, Width } from '../layout-components/spaces/SpacesComponenet';
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';
import { LuEllipsis } from 'react-icons/lu';
ModuleRegistry.registerModules([AllCommunityModule]);

const GridComponent = ({
  data,
  fitRowWidth,
  columns,
  extraButton,
  onRowClicked,
  noPagination,
  height,
  onCellValueChanged,
  enableCellSpan,
  selection,
  setSelectionArray,
  clearSelection,
  changePageAction,
  searchText,
  listLength,
  onChangePerPage,
  onClearSelection,
  showCheckboxes = true,
}) => {
  //테이블 ref
  const gridApiRef = useRef(null);

  //체크박스 선택을 위한 설정
  const rowSelection = useMemo(() => {
    return {
      mode: 'multiRow',
      checkboxes: showCheckboxes,
      headerCheckbox: showCheckboxes,
    };
  }, [showCheckboxes]);

  //가로 스크롤이 생기면서 컬럼이 잘리는 현상을 해결하기 위한 함수
  const onGridSizeChanged = useCallback(
    (params) => {
      const gridWidth = document.querySelector('.ag-body-viewport').clientWidth;
      const columnsToShow = [];
      const columnsToHide = [];
      let totalColsWidth = 0;
      const allColumns = params.api.getColumns();
      if (allColumns && allColumns.length > 0) {
        for (let i = 0; i < allColumns.length; i++) {
          const column = allColumns[i];
          totalColsWidth += column.getMinWidth();
          if (totalColsWidth > gridWidth) {
            columnsToHide.push(column.getColId());
          } else {
            columnsToShow.push(column.getColId());
          }
        }
      }
      params.api.setColumnsVisible(columnsToShow, true);
      params.api.setColumnsVisible(columnsToHide, false);
      window.setTimeout(() => {
        params.api.sizeColumnsToFit();
      }, 10);
    },
    [window],
  );

  //페이지네이션 안에 한 번에 보이는 페이지 설정
  const paginationPageSizeSelector = useMemo(() => {
    return [
      { value: 10, label: '10개씩 보기' },
      { value: 30, label: '30개씩 보기' },
      { value: 50, label: '50개씩 보기' },
      { value: 100, label: '100개씩 보기' },
    ];
  }, []);

  //테이블 ref 설정
  const onGridReady = useCallback((params) => {
    gridApiRef.current = params.api;
  }, []);

  //정렬 설정
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  //정렬 변경 시 이벤트
  const onSortChanged = (params) => {
    console.log(params.api.getColumnState());
    const sortModel = params.api
      .getColumnState()
      .find((col) => col.sort !== null);
    if (sortModel) {
      const { colId, sort } = sortModel;
      console.log(colId, sort);
      setSortField(colId);
      setSortOrder(sort);
    } else {
      setSortField('');
      setSortOrder('');
    }
  };

  //체크박스 선택 시 이벤트
  const handleButtonClick = () => {
    // clearSelection이 true일 때는 선택 이벤트 무시
    if (clearSelection) return;
    const selectedNodes = gridApiRef.current.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectionArray(selectedData);
  };

  //체크박스 전체 선택 해제
  const handleDeselectAll = () => {
    if (gridApiRef.current) {
      gridApiRef.current.deselectAll();
      if (typeof onClearSelection === 'function') {
        onClearSelection();
      }
    }
  };
  useEffect(() => {
    if (clearSelection) {
      handleDeselectAll();
    }
  }, [clearSelection]);

  //페이지네이션 버튼 이벤트 - 처음, 마지막, 다음, 이전, 해당 index
  const onBtFirst = useCallback(() => {
    setCurrentPage(0);
  }, []);

  const onBtLast = useCallback(() => {
    setCurrentPage(totalPage - 1);
  }, []);

  const onBtNext = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  const onBtPrevious = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
  }, []);

  const onBtPageIndex = useCallback((index) => {
    setCurrentPage(index);
  }, []);

  //현재 페이지, 페이지 사이즈 설정
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  //데이터 길이
  const dataLength = useMemo(() => {
    return listLength ?? 0;
  }, [listLength]);

  //전체 페이지 수
  const totalPage = useMemo(() => {
    return Math.ceil(dataLength / pageSize);
  }, [dataLength, pageSize]);

  useEffect(() => {
    if (changePageAction) {
      changePageAction(currentPage, pageSize, searchText);
    }
  }, [currentPage, pageSize, searchText, sortField, sortOrder]);

  const processedColumns = useMemo(() => {
    if (!columns || columns.length === 0) return columns;
    return [
      {
        ...columns[0],
        checkboxSelection: showCheckboxes,
        headerCheckboxSelection: showCheckboxes,
      },
      ...columns.slice(1),
    ];
  }, [columns, showCheckboxes]);

  return (
    <div className="w-100">
      <div className="d-flex">
      {/* <div className="d-flex" style={{ justifyContent: 'flex-end' }}> */}
        {!noPagination && (
          <Width width="10rem">
            <SelectBox
              options={paginationPageSizeSelector}
              defaultValue={paginationPageSizeSelector[0]}
              onChange={(option) => {
                setPageSize(option.value);
                if (onChangePerPage) onChangePerPage(option.value);
              }}
              isDisabled={!onChangePerPage}
            />
          </Width>
        )}
        {extraButton}
      </div>
      {!noPagination && <Height height="0.75rem" />}
      <div className="example-wrapper">
        <div style={{ width: '100%', height: height ?? '100%' }}>
          <AgGridReact
            // ref={gridRef}
            rowData={data}
            columnDefs={processedColumns}
            paginationPageSize={pageSize}
            pagination={!noPagination}
            suppressPaginationPanel={true}
            onGridReady={onGridReady}
            onGridSizeChanged={fitRowWidth ? onGridSizeChanged : undefined}
            onRowClicked={
              typeof onRowClicked === 'function'
                ? (e) => onRowClicked(e.data)
                : undefined
            }
            onSelectionChanged={handleButtonClick}
            rowClass={onRowClicked ? 'pointer' : ''}
            domLayout={height ?? 'autoHeight'}
            onCellValueChanged={onCellValueChanged ?? undefined}
            noRowsOverlayComponent={() => <div>데이터가 없습니다.</div>}
            enableCellSpan={enableCellSpan}
            rowSelection={selection ? 'multiple' : undefined}
            onSortChanged={onSortChanged}
            getRowId={params => params.data.id}
          />
        </div>
      </div>
      {!noPagination && (
        <>
          <Height height="1.5rem" />
          <Flex justify="flex-end" gap="0.5rem">
            <SecondaryButton
              bordered
              onClick={onBtFirst}
              disabled={currentPage === 0}
            >
              <HiChevronDoubleLeft />
            </SecondaryButton>
            <SecondaryButton
              bordered
              onClick={onBtPrevious}
              disabled={currentPage === 0}
            >
              <HiChevronLeft />
            </SecondaryButton>
            {Array.from({ length: totalPage }).map((_, index) => {
              let startPage, endPage;

              if (currentPage <= 1) {
                startPage = 0;
                endPage = Math.min(4, totalPage - 1);
              } else if (currentPage >= totalPage - 2) {
                startPage = Math.max(totalPage - 5, 0);
                endPage = totalPage - 1;
              } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
              }

              if (index >= startPage && index <= endPage) {
                return (
                  <SecondaryButton
                    bordered
                    key={`page_button_${index}`}
                    onClick={() => onBtPageIndex(index)}
                    className={currentPage === index ? 'active' : ''}
                  >
                    {index + 1}
                  </SecondaryButton>
                );
              }

              if (index === startPage - 1 || index === endPage + 1) {
                return (
                  <span key={`ellipsis_${index}`}>
                    <LuEllipsis className="text-secondary" />
                  </span>
                );
              }

              return null;
            })}
            <SecondaryButton
              bordered
              onClick={onBtNext}
              disabled={currentPage === totalPage - 1}
            >
              <HiChevronRight />
            </SecondaryButton>
            <SecondaryButton
              bordered
              onClick={onBtLast}
              disabled={currentPage === totalPage - 1}
            >
              <HiChevronDoubleRight />
            </SecondaryButton>
          </Flex>
        </>
      )}
    </div>
  );
};

export default GridComponent;
