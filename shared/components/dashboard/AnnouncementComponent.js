import {
  Card,
  Height,
  Width,
} from '@/shared/layout-components/spaces/SpacesComponenet';
import { Flex } from '@/shared/layout-components/spaces/Flex';

const AnnouncementComponent = ({ data }) => {
  return (
    <>
      <Card>
        <Height height="12rem" overflow="auto">
          <Flex direction="column" gap="1rem" align="flex-start" width="100%">
            {data.length > 0 ? (
              data.map((item, index) => (
                <Flex key={`announcement_${index}`} gap="1rem" width="100%">
                  <Width
                    width={'80%'}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {item.title}
                  </Width>
                  <div className="ms-auto">{item.createdAt}</div>
                </Flex>
              ))
            ) : (
              <>등록된 공지사항이 없습니다.</>
            )}
          </Flex>
        </Height>
      </Card>
    </>
  );
};

AnnouncementComponent.layout = 'Contentlayout';
export default AnnouncementComponent;
