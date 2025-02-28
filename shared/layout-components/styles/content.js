import { Flex } from '../spaces/Flex';
import { Height } from '../spaces/SpacesComponenet';
import { HorizontalLine } from './line';
import { BoldText } from './text';

const Content = ({ title, extraButton, children }) => {
  return (
    <div className="w-100">
      <Flex>
        <BoldText size="1rem">{title}</BoldText>
        <div className="ms-auto">{extraButton}</div>
      </Flex>
      <Height height={'0.8rem'} />
      <HorizontalLine />
      <Flex
        direction="column"
        align="flex-start"
        padding="1.25rem 1rem"
        gap="1rem"
      >
        {children}
      </Flex>
    </div>
  );
};

export default Content;
