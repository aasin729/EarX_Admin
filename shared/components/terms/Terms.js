import { useState } from 'react';
import { Card } from '@/shared/layout-components/spaces/SpacesComponenet';
import Modal from '@/shared/components/Modal';
import { PrimaryButton, SecondaryButton } from '@/shared/layout-components/styles/button';

const initialTerms = [
  {
    id: 1,
    contents: `제1조(목적)  
이 약관은 [회사명]이 제공하는 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조(정의)  
① "회원"이란 본 약관에 따라 회사와 이용계약을 체결하고 서비스를 이용하는 자를 말합니다.  
② "서비스"란 회사가 제공하는 웹사이트 및 앱 기반의 제반 서비스를 의미합니다.

제3조(약관의 효력 및 변경)  
① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력을 발생합니다.  
② 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 변경 시 사전 공지합니다.

제4조(서비스의 이용)  
① 회사는 회원에게 안정적인 서비스 제공을 위해 최선을 다합니다.  
② 서비스 이용은 연중무휴, 1일 24시간을 원칙으로 합니다. 단, 시스템 점검 등의 사유가 발생할 경우 사전 고지 후 일시적으로 중단될 수 있습니다.

제5조(회원의 의무)  
① 회원은 관계 법령, 본 약관의 규정, 이용안내 및 주의사항 등 회사가 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.

제6조(계약 해지 및 이용제한)  
① 회원이 이용계약을 해지하고자 할 경우에는 회사에 요청하여야 합니다.`,
    created_at: '2025-05-08T01:21:31',
  },
];
const initialPrivacy = [
  {
    id: 1,
    contents: `제1조(개인정보의 수집 목적 및 항목)  
[회사명]은 다음의 목적을 위해 개인정보를 수집하며, 수집 항목은 아래와 같습니다.  
- 목적: 회원 가입 및 관리, 서비스 제공, 문의 응대  
- 항목: 이름, 이메일 주소, 전화번호, 서비스 이용 기록, 접속 IP

제2조(개인정보의 수집 방법)  
회사는 홈페이지, 모바일 앱, 고객센터 문의 등을 통해 개인정보를 수집합니다.

제3조(개인정보의 이용 및 보유 기간)  
수집한 개인정보는 회원 탈퇴 시까지 보유하며, 관계 법령에 따라 일정 기간 동안 보관될 수 있습니다.  
- 계약 또는 청약철회 등에 관한 기록: 5년  
- 전자금융 거래에 관한 기록: 5년  
- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년

제4조(개인정보의 제3자 제공)  
회사는 회원의 개인정보를 원칙적으로 외부에 제공하지 않으며, 다음의 경우에만 예외적으로 제공합니다.  
- 이용자의 사전 동의를 받은 경우  
- 법령에 의거하거나, 수사기관의 요청이 있는 경우`,
    created_at: '2025-05-09T02:10:00',
  },
];

const Terms = () => {
  // 탭 상태
  const [activeTab, setActiveTab] = useState('terms');

  // 모달 상태
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // 이용약관
  const [termsList, setTermsList] = useState(initialTerms);
  const [newTerms, setNewTerms] = useState('');
  const [editTermsId, setEditTermsId] = useState(null);
  const [editTermsContent, setEditTermsContent] = useState('');

  // 개인정보 처리방침
  const [privacyList, setPrivacyList] = useState(initialPrivacy);
  const [newPrivacy, setNewPrivacy] = useState('');
  const [editPrivacyId, setEditPrivacyId] = useState(null);
  const [editPrivacyContent, setEditPrivacyContent] = useState('');

  // 이용약관 추가
  const handleAddTerms = () => {
    if (!newTerms.trim()) return;
    setTermsList([
      ...termsList,
      {
        id: Date.now(),
        contents: newTerms,
        created_at: new Date().toISOString(),
      },
    ]);
    setNewTerms('');
    setShowTermsModal(false);
  };

  // 이용약관 수정
  const handleEditTerms = (id, contents) => {
    setEditTermsId(id);
    setEditTermsContent(contents);
  };
  const handleSaveEditTerms = (id) => {
    setTermsList(termsList.map(item => item.id === id ? { ...item, contents: editTermsContent } : item));
    setEditTermsId(null);
    setEditTermsContent('');
  };
  // 이용약관 삭제
  const handleDeleteTerms = (id) => {
    setTermsList(termsList.filter(item => item.id !== id));
  };

  // 개인정보 처리방침 추가
  const handleAddPrivacy = () => {
    if (!newPrivacy.trim()) return;
    setPrivacyList([
      ...privacyList,
      {
        id: Date.now(),
        contents: newPrivacy,
        created_at: new Date().toISOString(),
      },
    ]);
    setNewPrivacy('');
    setShowPrivacyModal(false);
  };
  // 개인정보 처리방침 수정
  const handleEditPrivacy = (id, contents) => {
    setEditPrivacyId(id);
    setEditPrivacyContent(contents);
  };
  const handleSaveEditPrivacy = (id) => {
    setPrivacyList(privacyList.map(item => item.id === id ? { ...item, contents: editPrivacyContent } : item));
    setEditPrivacyId(null);
    setEditPrivacyContent('');
  };
  // 개인정보 처리방침 삭제
  const handleDeletePrivacy = (id) => {
    setPrivacyList(privacyList.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* 탭 버튼 UI */}
      <div style={{ display: 'flex', marginBottom: 24, gap: 8 }}>
        <button
          onClick={() => setActiveTab('terms')}
          style={{
            fontWeight: activeTab === 'terms' ? 'bold' : 'normal',
            borderBottom: activeTab === 'terms' ? '2px solid #3366ff' : 'none',
            background: 'none', border: 'none', fontSize: 18, marginRight: 24, cursor: 'pointer', padding: 8, color: activeTab === 'terms' ? '#3366ff' : '#333'
          }}
        >
          이용약관
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          style={{
            fontWeight: activeTab === 'privacy' ? 'bold' : 'normal',
            borderBottom: activeTab === 'privacy' ? '2px solid #3366ff' : 'none',
            background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', padding: 8, color: activeTab === 'privacy' ? '#3366ff' : '#333'
          }}
        >
          개인정보 처리방침
        </button>
      </div>

      {/* 모달 */}
      <Modal
        show={showTermsModal}
        onHide={() => { setShowTermsModal(false); setNewTerms(''); }}
        title="이용약관 추가"
      >
        <div style={{ marginBottom: 24 }}>
          <textarea
            value={newTerms}
            onChange={e => setNewTerms(e.target.value)}
            placeholder="새 이용약관 내용을 입력하세요"
            style={{ width: '100%', minHeight: 200, fontSize: 15, padding: 12, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <SecondaryButton
            onClick={() => { setShowTermsModal(false); setNewTerms(''); }}
            style={{ marginRight: 12 }}
          >
            취소
          </SecondaryButton>
          <PrimaryButton
            onClick={handleAddTerms}
          >
            추가
          </PrimaryButton>
        </div>
      </Modal>
      <Modal
        show={showPrivacyModal}
        onHide={() => { setShowPrivacyModal(false); setNewPrivacy(''); }}
        title="개인정보 처리방침 추가"
      >
        <div style={{ marginBottom: 24 }}>
          <textarea
            value={newPrivacy}
            onChange={e => setNewPrivacy(e.target.value)}
            placeholder="새 개인정보 처리방침 내용을 입력하세요"
            style={{ width: '100%', minHeight: 200, fontSize: 15, padding: 12, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <SecondaryButton
            onClick={() => { setShowPrivacyModal(false); setNewPrivacy(''); }}
            style={{ marginRight: 12 }}
          >
            취소
          </SecondaryButton>
          <PrimaryButton
            onClick={handleAddPrivacy}
          >
            추가
          </PrimaryButton>
        </div>
      </Modal>

      {/* 탭별 내용 */}
      {activeTab === 'terms' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '0 0 16px 0' }}>
            <PrimaryButton
              onClick={() => setShowTermsModal(true)}
              style={{ fontWeight: 'bold', fontSize: 16 }}
            >
              추가
            </PrimaryButton>
          </div>
          <Card style={{ padding: 24, minWidth: 350, height: 500, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>이용약관</div>
            {termsList.length === 0 && <div style={{ color: '#888', marginBottom: 12 }}>등록된 이용약관이 없습니다.</div>}
            {termsList.map((item) => (
              <div key={item.id} style={{ marginBottom: 24, borderBottom: '1px solid #eee', paddingBottom: 16, position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: '#888' }}>
                    등록일: {new Date(item.created_at).toLocaleDateString()}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {editTermsId === item.id ? (
                      <>
                        <PrimaryButton onClick={() => handleSaveEditTerms(item.id)} style={{ marginRight: 8 }}>
                          저장
                        </PrimaryButton>
                        <SecondaryButton onClick={() => setEditTermsId(null)}>
                          취소
                        </SecondaryButton>
                      </>
                    ) : (
                      <>
                        <PrimaryButton onClick={() => handleEditTerms(item.id, item.contents)} style={{ marginRight: 8 }}>
                          수정
                        </PrimaryButton>
                        <SecondaryButton onClick={() => handleDeleteTerms(item.id)} style={{ background: '#ff4d4f', color: '#fff' }}>
                          삭제
                        </SecondaryButton>
                      </>
                    )}
                  </div>
                </div>
                {editTermsId === item.id ? (
                  <div style={{ marginBottom: 8, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <textarea
                      value={editTermsContent}
                      onChange={e => setEditTermsContent(e.target.value)}
                      style={{ width: '100%', height: '100%', minHeight: 0, flex: 1, fontSize: 15, padding: 12, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
                    />
                  </div>
                ) : (
                  <div style={{ whiteSpace: 'pre-line', marginBottom: 8, flex: 1 }}>
                    {item.contents}
                  </div>
                )}
              </div>
            ))}
          </Card>
        </>
      )}
      {activeTab === 'privacy' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '0 0 16px 0' }}>
            <PrimaryButton
              onClick={() => setShowPrivacyModal(true)}
              style={{ fontWeight: 'bold', fontSize: 16 }}
            >
              추가
            </PrimaryButton>
          </div>
          <Card style={{ padding: 24, minWidth: 350, height: 500, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>개인정보 처리방침</div>
            {privacyList.length === 0 && <div style={{ color: '#888', marginBottom: 12 }}>등록된 개인정보 처리방침이 없습니다.</div>}
            {privacyList.map((item) => (
              <div key={item.id} style={{ marginBottom: 24, borderBottom: '1px solid #eee', paddingBottom: 16, position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: '#888' }}>
                    등록일: {new Date(item.created_at).toLocaleDateString()}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {editPrivacyId === item.id ? (
                      <>
                        <PrimaryButton onClick={() => handleSaveEditPrivacy(item.id)} style={{ marginRight: 8 }}>
                          저장
                        </PrimaryButton>
                        <SecondaryButton onClick={() => setEditPrivacyId(null)}>
                          취소
                        </SecondaryButton>
                      </>
                    ) : (
                      <>
                        <PrimaryButton onClick={() => handleEditPrivacy(item.id, item.contents)} style={{ marginRight: 8 }}>
                          수정
                        </PrimaryButton>
                        <SecondaryButton onClick={() => handleDeletePrivacy(item.id)} style={{ background: '#ff4d4f', color: '#fff' }}>
                          삭제
                        </SecondaryButton>
                      </>
                    )}
                  </div>
                </div>
                {editPrivacyId === item.id ? (
                  <div style={{ marginBottom: 8, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <textarea
                      value={editPrivacyContent}
                      onChange={e => setEditPrivacyContent(e.target.value)}
                      style={{ width: '100%', height: '100%', minHeight: 0, flex: 1, fontSize: 15, padding: 12, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
                    />
                  </div>
                ) : (
                  <div style={{ whiteSpace: 'pre-line', marginBottom: 8, flex: 1 }}>
                    {item.contents}
                  </div>
                )}
              </div>
            ))}
          </Card>
        </>
      )}
    </div>
  );
};

export default Terms;
