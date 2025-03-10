import GridComponent from '../../GridComponent';

const SpendDepositTable = ({ data }) => {
  const columns = [];
  return <GridComponent noPagination data={data} columns={columns} />;
};

export default SpendDepositTable;
