import Swal from 'sweetalert2';

export const useSwal = () => {
  const success = (title, text, html) => {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      html: html,
    });
  };

  const error = (title, text, html) => {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      html: html,
    });
  };

  const confirm = (title, text, html) => {
    return Swal.fire({
      title: title,
      text: text,
      html: html,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      reverseButtons: true,
    });
  };

  return { success, error, confirm };
};
