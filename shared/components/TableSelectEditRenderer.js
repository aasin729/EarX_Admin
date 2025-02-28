import { Flex } from '@/shared/layout-components/spaces/Flex';
import { GoTriangleDown } from 'react-icons/go';

const TableSelectEditRenderer = ({ value }) => {
  return (
    <Flex justify="center">
      <span className="ms-3">{value}</span>
      <GoTriangleDown className="ms-2" />
    </Flex>
  );
};

export default TableSelectEditRenderer;
