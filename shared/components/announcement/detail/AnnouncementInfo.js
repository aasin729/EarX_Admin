import { Flex } from '@/shared/layout-components/spaces/Flex';
import {
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { HorizontalLine } from '@/shared/layout-components/styles/line';
import { BoldText } from '@/shared/layout-components/styles/text';

const AnnouncementInfo = ({ data }) => {
  return (
    <>
      <HorizontalLine />
      <Height height="3rem" />
      <Flex height="2rem" gap="1rem">
        <Width width="7rem">
          <BoldText>제목</BoldText>
        </Width>
        <div className="form-control"></div>
      </Flex>
      <Flex height="2rem" gap="1rem">
        <Width width="7rem">
          <BoldText>등록일자</BoldText>
        </Width>
        <div className="form-control"></div>
      </Flex>
      <Flex gap="1rem">
        <Width width="7rem">
          <BoldText>내용</BoldText>
        </Width>
        <div className="form-control"></div>
      </Flex>
      <Flex
        minHeight="2rem"
        gap="1rem"
        align="flex-start"
        padding="0.5rem 0 0 0"
      >
        <Width width="7rem">
          <BoldText>첨부파일</BoldText>
        </Width>
      </Flex>
    </>
  );
};

export default AnnouncementInfo;
