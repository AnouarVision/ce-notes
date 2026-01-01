import { useParams, Navigate } from "react-router-dom";
import { topicContent } from "../../data/topicContent";
import { sectionsMap } from "../../sections/sectionsMap";

export default function Section() {
  const { topicSlug, pageSlug } = useParams();

  const topic = topicContent[topicSlug];

  if (!topic) {
    return <Navigate to="/404" replace />;
  }

  const isValidSection = topic.related?.some(
    (item) => item.slug === pageSlug
  );

  if (!isValidSection) {
    return <Navigate to="/404" replace />;
  }

  const PageComponent = sectionsMap?.[topicSlug]?.[pageSlug];

  if (!PageComponent) {
    return <h1>Section component not implemented yet</h1>;
  }

  return <PageComponent />;
}
