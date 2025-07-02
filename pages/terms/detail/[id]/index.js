import { useRouter } from 'next/router';

const termsDetail = {
  '1': { title: '이용약관', content: '여기에 약관 내용이 들어갑니다.' },
  '2': { title: '개인정보 처리방침', content: '여기에 개인정보 처리방침 내용이 들어갑니다.' },
};

export default function TermsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const detail = termsDetail[id];

  if (!detail) return <div>Loading...</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>{detail.title}</h2>
      <div style={{ whiteSpace: 'pre-line', marginTop: 16 }}>{detail.content}</div>
    </div>
  );
} 