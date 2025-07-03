import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { deviceMockData } from '@/shared/components/device/Device';
import useFetch from '@/shared/hooks/useFetch';

const fieldLabels = {
  email: '이메일',
  name: '이름',
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
  login_type: '로그인 타입',
  device_id: '디바이스 ID 정보',
  roles: '사용자 권한 정보',
  is_deleted: '삭제 여부',
  provider_id: '제공 ID',
};

const formatValue = (key, value) => {
  if (value === null || value === undefined) return '-';
  if (key === 'is_deleted') return value ? '삭제' : '미삭제';
  if (key === 'login_type') {
    switch (value) {
      case 0:
      case '0':
        return 'EARX APP';
      case 1:
      case '1':
        return '구글';
      case 2:
      case '2':
        return 'IOS';
      default:
        return '-';
    }
  }
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
  'email', 'name', 'picture', 'birthday', 'gender', 'height', 'height_unit', 'weight', 'weight_unit', 'unit_of_measure', 'language', 'device_id', 'roles', 'provider_id'
];
const subFields = [
  'login_type', 'run_reminder', 'promotion', 'is_deleted'
];

const allFields = [
  'email',
  'name',
  'picture',
  'birthday',
  'gender',
  'height',
  'height_unit',
  'weight',
  'weight_unit',
  'unit_of_measure',
  'language',
  'run_reminder',
  'promotion',
  'login_type',
  'device_id',
  'roles',
  'is_deleted',
  'provider_id',
];

const cardStyle = {
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  padding: 20,
  marginBottom: 20,
  width: '100%',
};
const sectionTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: 18,
};
const buttonStyle = {
  background: '#3b82f6',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '10px 28px',
  fontSize: 16,
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  transition: 'background 0.2s',
};
const labelStyle = {
  fontWeight: 600,
  color: '#333',
  fontSize: 17,
  marginBottom: 4,
  display: 'block',
};
const valueStyle = {
  fontWeight: 400,
  color: '#222',
  fontSize: 14,
  marginBottom: 12,
  display: 'block',
};

const UserDetail = () => {
  const router = useRouter();
  const { id, from } = router.query;
  const { getAction } = useFetch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 실제 API에서 유저 상세 정보 가져오기
  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAction(`/API/user/one/${id}`);
        if (res && res.id) {
          setUser(res);
        } else {
          setUser(null);
        }
      } catch (err) {
        setError('유저 정보를 불러오지 못했습니다.');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  // 해당 유저의 디바이스 정보만 추출 (여기는 여전히 mock)
  const userDevices = deviceMockData.filter(d => d.user_id === Number(id));

  if (loading) return <div style={{textAlign:'center',marginTop:80}}>로딩 중...</div>;
  if (error) return <div style={{textAlign:'center',marginTop:80}}>{error}</div>;
  if (!user) return <div style={{textAlign:'center',marginTop:80}}>사용자를 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24,}}>
      <h2 style={{ fontSize: '1.7rem', marginBottom: 24, fontWeight: 700, textAlign: 'center' }}>사용자 상세 정보</h2>
      {/* 프로필 카드 */}
      <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: 20 }}>
        {user.picture ? (
          <img src={user.picture} alt="프로필 사진" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        ) : (
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: '#aaa', fontWeight: 700 }}>?</div>
        )}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 100 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', width: '100%' }}>
            <div style={{ minWidth: 120 }}>
              <div style={labelStyle}>이름</div>
              <div style={valueStyle}>{user.name || '-'}</div>
            </div>
            <div style={{ minWidth: 180 }}>
              <div style={labelStyle}>이메일</div>
              <div style={valueStyle}>{user.email || '-'}</div>
            </div>
            <div style={{ minWidth: 120 }}>
              <div style={labelStyle}>생일</div>
              <div style={valueStyle}>{formatValue('birthday', user.birthday)}</div>
            </div>
            <div style={{ minWidth: 80 }}>
              <div style={labelStyle}>성별</div>
              <div style={valueStyle}>{user.gender || '-'}</div>
            </div>
          </div>
        </div>
      </div>
      {/* 기본 정보 + 기타 정보 카드 수평 정렬 */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
        {/* 기본 정보 카드 */}
        <div style={{ ...cardStyle, flex: 1 }}>
          <div style={sectionTitleStyle}>기본 정보</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>키</div>
              <div style={valueStyle}>
                {user.height
                  ? (user.height_unit && String(user.height_unit).trim() !== ''
                      ? `${user.height} ${user.height_unit}`
                      : <>{user.height} <span style={{ color: 'red' }}>(단위 미지정)</span></>
                    )
                  : <span style={{ color: 'red'}}>(단위 미지정)</span>
                }
              </div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>몸무게</div>
              <div style={valueStyle}>
                {user.weight
                  ? (user.weight_unit && String(user.weight_unit).trim() !== ''
                      ? `${user.weight} ${user.weight_unit}`
                      : <>{user.weight} <span style={{ color: 'red' }}>(단위 미지정)</span></>
                    )
                  : <span style={{ color: 'red' }}>(단위 미지정)</span>
                }
              </div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>언어</div>
              <div style={valueStyle}>{user.language || '-'}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>측정 단위 시스템</div>
              <div style={valueStyle}>{user.unit_of_measure || '-'}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>제공 ID</div>
              <div style={valueStyle}>{user.provider_id || '-'}</div>
            </div>
          </div>
        </div>
        {/* 기타 정보 카드 */}
        <div style={{ ...cardStyle, flex: 1 }}>
          <div style={sectionTitleStyle}>기타 정보</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>로그인 타입</div>
              <div style={valueStyle}>{formatValue('login_type', user.login_type)}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>달리기 알림 설정</div>
              <div style={valueStyle}>{user.run_reminder !== undefined ? (user.run_reminder ? 'ON' : 'OFF') : '-'}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>프로모션 수신 동의</div>
              <div style={valueStyle}>{user.promotion !== undefined ? (user.promotion ? '동의' : '미동의') : '-'}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>삭제 여부</div>
              <div style={valueStyle}>{formatValue('is_deleted', user.is_deleted)}</div>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 180 }}>
              <div style={labelStyle}>권한 정보</div>
              <div style={valueStyle}>{user.roles || '-'}</div>
            </div>
          </div>
        </div>
      </div>
      {/* 디바이스 정보 카드 */}
      {from === 'device' && userDevices.length > 0 && (
        <div style={cardStyle}>
          <div style={sectionTitleStyle}>디바이스 정보</div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12, fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>ID</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>Windows</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>Android</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>Web</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>iOS</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>macOS</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>생성 일시</th>
                  <th style={{ border: '1px solid #eee', padding: 8, background: '#f5f5f5' }}>업데이트 일시</th>
                </tr>
              </thead>
              <tbody>
                {userDevices.map(device => (
                  <tr key={device.id}>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.id}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.windows || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.android || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.web || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.ios || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.macos || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.created_at || '-'}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{device.updated_at || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div style={{ marginTop: 12, textAlign: 'right' }}>
        <button style={buttonStyle} onClick={() => router.push(from === 'device' ? '/device' : '/users')}>목록</button>
      </div>
    </div>
  );
};

export default UserDetail;

UserDetail.layout = 'Contentlayout';
