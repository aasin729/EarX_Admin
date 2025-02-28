import ReactDatePicker from 'react-datepicker';

const DatePicker = (props) => {
  return (
    <ReactDatePicker
      className="form-control wd-auto text-center pointer"
      dateFormat={'yyyy-MM-dd'}
      portalId="__next"
      {...props}
    />
  );
};

export default DatePicker;
