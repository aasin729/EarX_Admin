import { Width } from '@/shared/layout-components/spaces/SpacesComponenet';

const { Flex } = require('@/shared/layout-components/spaces/Flex');
const { BoldText } = require('@/shared/layout-components/styles/text');
const { default: SelectBox } = require('../SelectBox');
const { InputWrapper } = require('@/shared/layout-components/styles/input');

const CategorySelectbox = ({ input }) => {
  return (
    <Flex gap="0.5rem" width={input ? '100%' : 'auto'}>
      <Width width="5.6rem">
        <BoldText>품목 구분</BoldText>
      </Width>
      <SelectBox placeholder="대분류" className="wd-250" name="category1" />
      <SelectBox className="wd-250" placeholder="중분류" name="category2" />
      <SelectBox className="wd-250" placeholder="소분류" name="category3" />
      {input && (
        <InputWrapper
          className="flex-1"
          name="productName"
          placeholder="품목명 혹은 품목번호를 입력하세요"
        />
      )}
    </Flex>
  );
};

export default CategorySelectbox;
