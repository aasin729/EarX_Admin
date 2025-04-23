import { Flex } from '@/shared/layout-components/spaces/Flex';
import { Width } from '@/shared/layout-components/spaces/SpacesComponenet';
import { BoldText } from '@/shared/layout-components/styles/text';
import SelectBox from '../SelectBox';
import { periodOptions } from '@/shared/functions/options';
import { useState } from 'react';
import DatePicker from '../DatePicker';

const PeriodInputs = ({ onlyMonth, onlyDay, title, single }) => {
  //기간 옵션
  const [periodType, setPeriodType] = useState(
    onlyMonth ? periodOptions[1] : periodOptions[0],
  );
  const [selectedDate, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <Flex gap="0.5rem" width={'auto'}>
      <Width width="5.6rem">
        <BoldText>{title ?? '기간 검색'}</BoldText>
      </Width>
      {!(onlyMonth || onlyDay) && (
        <Width width="100px">
          <SelectBox
            options={periodOptions}
            value={periodType}
            onChange={(option) => setPeriodType(option)}
            name="periodType"
          />
        </Width>
      )}
      <Width
        width={single ? '250px' : onlyMonth || onlyDay ? '242px' : '187px'}
      >
        <DatePicker
          showMonthYearPicker={periodType.value === 'month'}
          onChange={(date) =>
            setSelectedDate({ ...selectedDate, startDate: date })
          }
          selected={selectedDate.startDate}
          format={periodType.value === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'}
          maxDate={new Date()}
          name="startDate"
        />
      </Width>
      {!single && (
        <>
          ~
          <Width width={onlyMonth || onlyDay ? '242px' : '187px'}>
            <DatePicker
              showMonthYearPicker={periodType.value === 'month'}
              onChange={(date) =>
                setSelectedDate({ ...selectedDate, endDate: date })
              }
              selected={selectedDate.endDate}
              format={periodType.value === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'}
              maxDate={new Date()}
              minDate={selectedDate.startDate}
              name="endDate"
            />
          </Width>
        </>
      )}
    </Flex>
  );
};

export default PeriodInputs;
