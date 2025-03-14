import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
} from '@/shared/layout-components/spaces/SpacesComponenet';
const CurrentReturn = ({ data }) => {
  return (
    <Card>
      <Height height="12rem">
        <h5 className="fw-bold text-center pb-3">회수</h5>
        <Flex className="pb-3">
          <div>완료</div>
          <div className="ms-auto">{data.complated}건</div>
        </Flex>
        <Flex className="pb-3">
          <div>미완료</div>
          <div className="ms-auto">{data.uncompleted}건</div>
        </Flex>
      </Height>
    </Card>
  );
};

export default CurrentReturn;
