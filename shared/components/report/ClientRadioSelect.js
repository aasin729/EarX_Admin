import { Flex } from '@/shared/layout-components/spaces/Flex';
import { Width } from '@/shared/layout-components/spaces/SpacesComponenet';
import { BoldText } from '@/shared/layout-components/styles/text';
import { useState } from 'react';
import { RadioInput } from '@/shared/layout-components/styles/input';
import SelectBox from '../SelectBox';

const ClientRadioSelect = ({ onlyClient }) => {
  const [clientType, setClientType] = useState('all');
  const handleClientType = (e) => {
    setClientType(e.target.value);
  };
  return (
    <Flex width="auto" gap="1rem">
      <Width width="5.6rem">
        <BoldText>고객사</BoldText>
      </Width>
      {!onlyClient && (
        <>
          <RadioInput
            id="client_all"
            name="clientType"
            value="all"
            label="전체"
            defaultChecked={clientType === 'all'}
            onChange={handleClientType}
          />
          <RadioInput
            id="client"
            name="clientType"
            value="client"
            label="고객사"
            onChange={handleClientType}
          />
        </>
      )}
      {(clientType === 'client' || onlyClient) && (
        <Width width="250px">
          <SelectBox name="clientName" />
        </Width>
      )}
    </Flex>
  );
};

export default ClientRadioSelect;
