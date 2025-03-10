import GridComponent from '../../GridComponent';

const WashingTable = ({ data }) => {
  const columns = [];
  return <GridComponent noPagination data={data} columns={columns} />;
};

export default WashingTable;
