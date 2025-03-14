import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Card,
  Height,
} from '@/shared/layout-components/spaces/SpacesComponenet';
const CurrentWashing = ({ data }) => {
  return (
    <Card>
      <Height height="12rem">
        <h5 className="fw-bold text-center pb-3">세탁</h5>
        <Flex className="pb-3">
          <div>세탁 대기</div>
          <div className="ms-auto">{data.waiting}건</div>
        </Flex>
        <Flex className="pb-3">
          <div>세탁중</div>
          <div className="ms-auto">{data.onGoing}건</div>
        </Flex>
        <Flex>
          <div>세탁 완료</div>
          <div className="ms-auto">{data.completed}건</div>
        </Flex>
      </Height>
    </Card>
  );
};

export default CurrentWashing;
