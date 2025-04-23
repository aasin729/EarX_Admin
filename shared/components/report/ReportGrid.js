import GridComponent from '../GridComponent';

const ReportGrid = ({ data = [], columns = [] }) => {
  return (
    <GridComponent data={data} columns={columns} noPagination enableCellSpan />
  );
};

export default ReportGrid;
