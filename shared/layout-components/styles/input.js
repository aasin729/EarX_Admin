import { forwardRef, useEffect, useRef } from 'react';
import { Flex } from '../spaces/Flex';

export const InputWrapper = forwardRef(
  ({ width, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={`form-control ${width ?? 'w-auto'} ${className ?? ''}`}
        {...props}
      />
    );
  },
);

export const AddressInput = ({ name, defaultValue = '' }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['geocode'],
          componentRestrictions: { country: 'kr' },
        },
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        console.log('Selected place:', place);
      });
    }
  }, []);

  return (
    <>
      <input
        type="text"
        className="form-control"
        ref={inputRef}
        placeholder="주소를 입력해 주세요"
        name={name}
        defaultValue={defaultValue}
      />
    </>
  );
};

export const RadioInput = forwardRef(
  ({ id, name, value, label, defaultChecked, labelClass, onChange }, ref) => {
    return (
      <div className="form-check">
        <input
          ref={ref}
          className="form-check-input"
          type="radio"
          name={name}
          value={value}
          id={id}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <label className={`form-check-label ${labelClass ?? ''}`} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  },
);

export const Checkbox = ({ name, id, label, labelClass }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={name} id={id} />
      <label className={`form-check-label ${labelClass ?? ''}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
