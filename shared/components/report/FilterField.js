import { GrayCard } from '@/shared/layout-components/spaces/CustomCard';
import { Flex } from '@/shared/layout-components/spaces/Flex';

const FilterField = ({ children }) => {
  return (
    <GrayCard>
      <Flex direction="column" align="flex-start" width="100%" gap="0.5rem">
        {children}
      </Flex>
    </GrayCard>
  );
};

export default FilterField;
