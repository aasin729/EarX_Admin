const deviceMockData = [
  {
    user_id: 1,
    windows: null,
    android: 'FF:00:AB:CD:13:5A',
    web: null,
    updated_at: '2025-07-01T12:56:10',
    id: '7b0badfb-0322-4363-adb7-4191ae3afc7f-1',
    ios: 'FF:00:AB:CD:13:5A',
    macos: null,
    created_at: '2025-07-01T12:56:10',
  },
  {
    user_id: 2,
    windows: null,
    android: 'FF:00:AB:CD:13:59',
    web: null,
    updated_at: '2025-07-01T15:45:36',
    id: 'c54bba26-f394-460e-9746-7951d0acd4c2-2',
    ios: 'FF:00:AB:CD:13:59',
    macos: null,
    created_at: '2025-07-01T15:45:36',
  },
  {
    user_id: 3,
    windows: null,
    android: 'FF:00:AB:CD:18:02',
    web: null,
    updated_at: '2025-06-24T15:13:14',
    id: 'd26c619d-6b00-49ae-aa14-f73151c7ecad-3',
    ios: 'FF:00:AB:CD:18:02',
    macos: null,
    created_at: '2025-06-24T15:13:14',
  },
  {
    user_id: 4,
    windows: null,
    android: 'F8:EE:DD:CC:KK:AA',
    web: null,
    updated_at: '2025-07-02T13:39:51',
    id: 'dc921ece-709a-4bfe-b400-114f60c878dd-4',
    ios: 'F8:EE:DD:CC:KK:AA',
    macos: null,
    created_at: '2025-07-02T13:39:51',
  },
  {
    user_id: 5,
    windows: null,
    android: 'FF:00:AB:CD:13:5A',
    web: null,
    updated_at: '2025-07-01T12:56:10',
    id: '7b0badfb-0322-4363-adb7-4191ae3afc7f-5',
    ios: 'FF:00:AB:CD:13:5A',
    macos: null,
    created_at: '2025-07-01T12:56:10',
  },
  {
    user_id: 6,
    windows: null,
    android: 'FF:00:AB:CD:13:59',
    web: null,
    updated_at: '2025-07-01T15:45:36',
    id: 'c54bba26-f394-460e-9746-7951d0acd4c2-6',
    ios: 'FF:00:AB:CD:13:59',
    macos: null,
    created_at: '2025-07-01T15:45:36',
  },
  {
    user_id: 7,
    windows: null,
    android: 'FF:00:AB:CD:18:02',
    web: null,
    updated_at: '2025-06-24T15:13:14',
    id: 'd26c619d-6b00-49ae-aa14-f73151c7ecad-7',
    ios: 'FF:00:AB:CD:18:02',
    macos: null,
    created_at: '2025-06-24T15:13:14',
  },
  {
    user_id: 8,
    windows: null,
    android: 'F8:EE:DD:CC:BB:AA',
    web: null,
    updated_at: '2025-07-02T13:39:51',
    id: 'dc921ece-709a-4bfe-b400-114f60c878dd-8',
    ios: 'F8:EE:DD:CC:BB:AA',
    macos: null,
    created_at: '2025-07-02T13:39:51',
  },
  {
    user_id: 9,
    windows: null,
    android: 'FF:00:AF:CD:18:02',
    web: null,
    updated_at: '2025-06-24T15:13:14',
    id: 'd26c619d-6b00-49ae-aa14-f73151c7eca53-6',
    ios: 'FF:00:AF:CD:18:02',
    macos: null,
    created_at: '2025-06-24T15:13:14',
  },
  {
    user_id: 10,
    windows: null,
    android: 'F8:EE:DD:GG:BB:AA',
    web: null,
    updated_at: '2025-07-02T13:39:51',
    id: 'dc921ece-709a-4bfe-b400-114f60c988dd-4',
    ios: 'F8:EE:DD:CC:GG:AA',
    macos: null,
    created_at: '2025-07-02T13:39:51',
  },
  {
    user_id: 11,
    windows: null,
    android: 'FF:00:AB:CJ:13:5A',
    web: null,
    updated_at: '2025-07-01T12:56:10',
    id: '7b0badfb-0322-4363-adb7-4191ahjhfc7f-5',
    ios: 'FF:00:AB:CJ:13:5A',
    macos: null,
    created_at: '2025-07-01T12:56:10',
  },
  {
    user_id: 12,
    windows: null,
    android: 'FF:00:AB:CD:17:59',
    web: null,
    updated_at: '2025-07-01T15:45:36',
    id: 'c54bba26-f394-460e-8888-7951d0acd4c2-6',
    ios: 'FF:00:AB:CD:17:59',
    macos: null,
    created_at: '2025-07-01T15:45:36',
  },
  {
    user_id: 13,
    windows: null,
    android: 'F8:AA:DD:GG:BB:AA',
    web: null,
    updated_at: '2025-07-02T13:39:51',
    id: 'dc921ece-709a-4bfe-b400-114f60c777dd-4',
    ios: 'F8:AA:DD:CC:GG:AA',
    macos: null,
    created_at: '2025-07-02T13:39:51',
  },
  {
    user_id: 14,
    windows: null,
    android: 'FF:00:FB:CJ:13:5A',
    web: null,
    updated_at: '2025-07-01T12:56:10',
    id: '7b0badfb-0322-4363-adb7-4191ahjrrr7f-5',
    ios: 'FF:00:FB:CJ:13:5A',
    macos: null,
    created_at: '2025-07-01T12:56:10',
  },
  {
    user_id: 15,
    windows: null,
    android: 'FF:00:AB:CD:18:59',
    web: null,
    updated_at: '2025-07-01T15:45:36',
    id: 'c54bba26-f394-460e-8888-7777d0acdkkk-6',
    ios: 'FF:00:AB:CD:18:59',
    macos: null,
    created_at: '2025-07-01T15:45:36',
  },
];

export default deviceMockData; 