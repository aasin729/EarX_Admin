import { useRouter } from 'next/router';
import usersMockData from '@/shared/components/users/usersMockData';
import React from 'react';

const fieldLabels = {
  id: 'ID',
  login_type: '로그인 타입',
  login_code: '로그인 코드',
  name: '이름',
  email: '이메일',
  picture: '프로필 사진',
  birthday: '생일',
  gender: '성별',
  height: '키',
  height_unit: '키 단위',
  weight: '몸무게',
  weight_unit: '몸무게 단위',
  unit_of_measure: '측정 단위 시스템',
  language: '언어',
  run_reminder: '달리기 알림 설정',
  promotion: '프로모션 수신 동의',
  calibration: '보정 정보',
  created_at: '생성 일시',
  updated_at: '수정 일시',
  new_update: '새로운 업데이트 알림 설정',
  device_id: '사용자 디바이스 ID 목록',
  roles: '역할',
  is_deleted: '삭제 여부',
  deleted_at: '삭제 일시',
  provider_id: '소셜 로그인 제공자 ID',
  push_token: '푸시 알림 토큰',
};

const formatValue = (key, value) => {
  if (value === null || value === undefined) return '-';
  if (key === 'is_deleted') return value ? '삭제' : '미삭제';
  if (key === 'created_at' || key === 'updated_at' || key === 'deleted_at') {
    const date = new Date(value);
    if (isNaN(date)) return value;
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mi = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
  }
  return value;
};

const mainFields = [
  'id', 'name', 'email', 'picture', 'birthday', 'gender', 'height', 'height_unit', 'weight', 'weight_unit', 'unit_of_measure', 'language', 'device_id', 'roles', 'provider_id'
];
const subFields = [
  'login_type', 'login_code', 'run_reminder', 'promotion', 'calibration', 'created_at', 'updated_at', 'new_update', 'is_deleted', 'deleted_at', 'push_token'
];

const allFields = Object.keys(fieldLabels);

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const user = usersMockData.find(u => u.id === Number(id));

  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '1.7rem', marginBottom: 24 }}>사용자 상세 정보</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {Array.from({ length: Math.ceil(allFields.length / 3) }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {allFields.slice(rowIdx * 3, rowIdx * 3 + 3).map(key =>
                user[key] !== undefined ? (
                  <React.Fragment key={key}>
                    <td style={{ fontWeight: 'bold', border: '1px solid #ddd', padding: 12, width: '16%', background: '#f5f5f5' }}>{fieldLabels[key] || key}</td>
                    <td style={{ border: '1px solid #ddd', padding: 12, width: '20%' }}>{formatValue(key, user[key])}</td>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={key}>
                    <td style={{ border: '1px solid #ddd', padding: 12, width: '16%', background: '#f5f5f5' }}></td>
                    <td style={{ border: '1px solid #ddd', padding: 12, width: '20%' }}></td>
                  </React.Fragment>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 32, textAlign: 'right' }}>
        <button onClick={() => router.push('/users')}>목록</button>
      </div>
    </div>
  );
};

export default UserDetail;
