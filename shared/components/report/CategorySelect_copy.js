import { Width } from '@/shared/layout-components/spaces/SpacesComponenet';

const { Flex } = require('@/shared/layout-components/spaces/Flex');
const { BoldText } = require('@/shared/layout-components/styles/text');
const { default: SelectBox } = require('../SelectBox');
const { InputWrapper } = require('@/shared/layout-components/styles/input');

const category1List = [
  { value: '침구', label: '침구' },
  { value: '타올', label: '타올' },
  { value: '가운', label: '가운' },
];

const category2List = [
  { value: '매트리스', label: '매트리스' },
  { value: '바디용 타올', label: '바디용 타올' },
  { value: '호텔용 가운', label: '호텔용 가운' },
  { value: '핸드 타올', label: '핸드 타올' },
];

const category3List = [
  { value: '일체형 풀커버', label: '일체형 풀커버' },
  { value: '상단 토퍼', label: '상단 토퍼' },
  { value: '남성 사이즈', label: '남성 사이즈' },
  { value: '와플소재', label: '와플소재' },
  { value: '40수 코마소재', label: '40수 코마소재' },
];

const CategorySelectbox = ({ input }) => {
  return (
    <Flex gap="0.5rem" width={input ? '100%' : 'auto'}>
      <Width width="5.6rem">
        <BoldText>품목 구분</BoldText>
      </Width>
      <SelectBox
        placeholder="대분류"
        className="wd-250"
        name="category1"
        options={category1List}
      />
      <SelectBox
        className="wd-250"
        placeholder="중분류"
        name="category2"
        options={category2List}
      />
      <SelectBox
        className="wd-250"
        placeholder="소분류"
        name="category3"
        options={category3List}
      />
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
