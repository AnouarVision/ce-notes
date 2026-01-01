import styles from "./LayoutSection.module.scss";
import SidebarSection from "../../components/SidebarSection/SidebarSection";

export default function LayoutSection({ children, toc }) {
  return (
    <div className={styles.layout}>
      {/* Inner wrapper for sidebar and main content */}
      <div className={styles.inner}>

        {/* Sidebar with Table of Contents */}
        <SidebarSection title={toc?.title} items={toc?.items} />

        {/* Main content area where children components will be rendered */}
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

