import { Width } from '@/shared/layout-components/spaces/SpacesComponenet';
import { useState } from 'react';

const { Flex } = require('@/shared/layout-components/spaces/Flex');
const { BoldText } = require('@/shared/layout-components/styles/text');
const { default: SelectBox } = require('../SelectBox');
const { InputWrapper } = require('@/shared/layout-components/styles/input');

const CategorySelectbox = ({ input, onCategoryChange, onProductSearch }) => {
  const [category2Options, setCategory2Options] = useState([]);
  const [category3Options, setCategory3Options] = useState([]);
  const [selectedCategory1, setSelectedCategory1] = useState('');
  const [selectedCategory2, setSelectedCategory2] = useState('');

  const category1Options = [
    { value: 'bed', label: '침구류' },
    { value: 'bath', label: '욕실용품' },
    { value: 'dining', label: '식당용품' },
  ];

  const category2Data = {
    bed: [
      { value: 'bedding', label: '이불/커버' },
      { value: 'pillow', label: '베개/커버' },
      { value: 'sheet', label: '시트류' },
    ],
    bath: [
      { value: 'towel', label: '수건류' },
      { value: 'robe', label: '가운류' },
      { value: 'mat', label: '매트류' },
    ],
    dining: [
      { value: 'napkin', label: '냅킨류' },
      { value: 'tablecloth', label: '테이블보' },
      { value: 'uniform', label: '유니폼' },
    ],
  };

  const category3Data = {
    bedding: [
      { value: 'duvet', label: '이불' },
      { value: 'duvetCover', label: '이불커버' },
    ],
    pillow: [
      { value: 'pillow', label: '베개' },
      { value: 'pillowCase', label: '베개커버' },
    ],
    sheet: [
      { value: 'flatSheet', label: '평시트' },
      { value: 'fittedSheet', label: '매트리스커버' },
    ],
    towel: [
      { value: 'bathTowel', label: '목욕수건' },
      { value: 'handTowel', label: '핸드타올' },
      { value: 'faceTowel', label: '페이스타올' },
    ],
    robe: [
      { value: 'bathRobe', label: '목욕가운' },
      { value: 'slipper', label: '슬리퍼' },
    ],
    mat: [
      { value: 'bathMat', label: '욕실매트' },
      { value: 'floorMat', label: '발매트' },
    ],
    napkin: [
      { value: 'tableNapkin', label: '테이블냅킨' },
      { value: 'cocktailNapkin', label: '칵테일냅킨' },
    ],
    tablecloth: [
      { value: 'dining', label: '식당테이블보' },
      { value: 'banquet', label: '연회테이블보' },
    ],
    uniform: [
      { value: 'chef', label: '조리복' },
      { value: 'service', label: '서비스복' },
    ],
  };

  const handleCategory1Change = (selected) => {
    setSelectedCategory1(selected);
    setCategory2Options(category2Data[selected] || []);
    setCategory3Options([]);
    setSelectedCategory2('');
    onCategoryChange('category1', selected);
  };

  const handleCategory2Change = (selected) => {
    setSelectedCategory2(selected);
    setCategory3Options(category3Data[selected] || []);
    onCategoryChange('category2', selected);
  };

  const handleCategory3Change = (e) => {
    onCategoryChange('category3', e.value);
  };

  return (
    <Flex gap="0.5rem" width={input ? '100%' : 'auto'}>
      <Width width="5.6rem">
        <BoldText>품목 구분</BoldText>
      </Width>
      <SelectBox
        placeholder="대분류"
        className="wd-250"
        name="category1"
        options={category1Options}
        onChange={(e) => handleCategory1Change(e.value)}
        value={category1Options.find((opt) => opt.value === selectedCategory1)}
      />
      <SelectBox
        className="wd-250"
        placeholder="중분류"
        name="category2"
        options={category2Options}
        onChange={(e) => handleCategory2Change(e.value)}
        value={category2Options.find((opt) => opt.value === selectedCategory2)}
      />
      <SelectBox
        className="wd-250"
        placeholder="소분류"
        name="category3"
        options={category3Options}
        onChange={handleCategory3Change}
      />
      {input && (
        <InputWrapper
          className="flex-1"
          name="productName"
          placeholder="품목명 혹은 품목번호를 입력하세요"
          onChange={onProductSearch}
        />
      )}
    </Flex>
  );
};

export default CategorySelectbox;
