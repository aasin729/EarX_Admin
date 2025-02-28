import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const SelectBox = (props) => {
  return (
    <Select
      styles={{
        control: (baseStyle, state) => ({
          ...baseStyle,
          borderColor: state.isFocused ? '#7987a1' : '#ededf5',
          outline: 'none',
          boxShadow: 'none',
        }),
      }}
      classNamePrefix="react-select"
      className="react-select-container"
      {...props}
    />
  );
};
export default SelectBox;
