import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// import { RichSelectModule } from 'ag-grid-enterprise';

// import {
//   ColumnMenuModule,
//   ColumnsToolPanelModule,
//   ContextMenuModule,
//   RowGroupingModule,
// } from 'ag-grid-enterprise';

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
ModuleRegistry.registerModules([
  AllCommunityModule,
  // RichSelectModule,
  // ColumnMenuModule,
  // ColumnsToolPanelModule,
  // ContextMenuModule,
  // RowGroupingModule,
]);

const GridComponent = ({
  data,
  setData,
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
}) => {
  const gridApiRef = useRef(null);

  const rowSelection = useMemo(() => {
    return {
      mode: 'multiRow',
      checkboxes: true,
      headerCheckbox: true,
    };
  }, []);

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

  const paginationPageSizeSelector = useMemo(() => {
    return [
      { value: 10, label: '10개씩 보기' },
      { value: 30, label: '30개씩 보기' },
      { value: 50, label: '50개씩 보기' },
      { value: 100, label: '100개씩 보기' },
    ];
  }, []);

  const onGridReady = useCallback((params) => {
    gridApiRef.current = params.api;
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        // setData(data);
      });
  }, []);

  const handleButtonClick = () => {
    const selectedNodes = gridApiRef.current.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectionArray(selectedData);
  };

  const handleDeselectAll = () => {
    if (gridApiRef.current) {
      gridApiRef.current.deselectAll();
    }
  };

  useEffect(() => {
    if (clearSelection) {
      handleDeselectAll();
    }
  }, [clearSelection]);

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

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [dataLength, setDataLength] = useState(10);

  const totalPage = useMemo(() => {
    return Math.ceil(dataLength / pageSize);
  }, [dataLength, pageSize]);

  return (
    <div className="w-100">
      <div className="d-flex">
        {!noPagination && (
          <Width width="10rem">
            <SelectBox
              options={paginationPageSizeSelector}
              defaultValue={paginationPageSizeSelector[0]}
              onChange={(option) => setPageSize(option.value)}
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
            columnDefs={columns}
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
            onRowSelected={handleButtonClick}
            rowClass={onRowClicked ? 'pointer' : ''}
            domLayout={height ?? 'autoHeight'}
            onCellValueChanged={onCellValueChanged ?? undefined}
            noRowsOverlayComponent={() => <div>데이터가 없습니다.</div>}
            enableCellSpan={enableCellSpan}
            // suppressScrollOnNewData={true}
            // defaultColDef={defaultColDef}
            rowSelection={selection ? rowSelection : undefined}
            // paginationPageSizeSelector={paginationPageSizeSelector}
            // onPaginationChanged={onPaginationChanged}
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
      {/* <div style={{ marginTop: '6px' }}>
        <span className="label">Last Page Found:</span>
        <span className="value" id="lbLastPageFound">
          -
        </span>
        <span className="label">Page Size:</span>
        <span className="value" id="lbPageSize">
          {pageSize}
        </span>
        <span className="label">Total Pages:</span>
        <span className="value" id="lbTotalPages">
          {totalPage}
        </span>
        <span className="label">Current Page:</span>
        <span className="value" id="lbCurrentPage">
          {currentPage + 1}
          {currentPage === 0 ? 'true' : 'false'}
        </span>
      </div> */}
    </div>
  );
};

export default GridComponent;
