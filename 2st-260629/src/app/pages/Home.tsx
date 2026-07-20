import { Link } from "react-router";
import { ArrowRight, Building2, Truck, HardHat } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MjM3MzgwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction site"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            미래를 짓는 견고한 파트너, <span className={styles.heroTitleAccent}>BuildCore</span>
          </h1>
          <p className={styles.heroDesc}>
            혁신적인 기술과 타협하지 않는 품질로 대한민국의 랜드마크를 완성합니다.
            지속 가능한 성장을 위해 환경과 안전을 최우선으로 생각합니다.
          </p>
          <div className={styles.heroBtnGroup}>
            <Link to="/products" className={styles.heroPrimaryBtn}>
              우리의 기술력 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/board" className={styles.heroSecondaryBtn}>
              고객 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesTitle}>핵심 가치</h2>
          <p className={styles.valuesDesc}>
            BuildCore는 수십 년간 쌓아온 노하우를 바탕으로 완벽을 추구합니다.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {[
            {
              icon: Building2,
              title: "혁신적 설계",
              desc: "최신 BIM 기술을 활용한 3D 모델링으로 오차 없는 정밀한 설계를 구현합니다.",
            },
            {
              icon: Truck,
              title: "스마트 시공",
              desc: "첨단 건설 장비와 자동화 시스템을 도입하여 안전하고 효율적인 시공을 약속합니다.",
            },
            {
              icon: HardHat,
              title: "안전 제일주의",
              desc: "무재해 작업장을 목표로 체계적인 안전 관리 시스템을 운영합니다.",
            },
          ].map((feature, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <feature.icon className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>{feature.title}</h3>
              <p className={styles.valueText}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Highlights */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <div>
            <h2 className={styles.projectsTitle}>주요 프로젝트</h2>
            <p className={styles.projectsDesc}>우리가 완성한 대표적인 건축물들을 소개합니다.</p>
          </div>
          <Link to="/products" className={styles.projectsLink}>
            전체 보기 <ArrowRight className={styles.projectsLinkIcon} />
          </Link>
        </div>
        
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc4MjM6MjQzMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Project A"
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}></div>
            <div className={styles.projectInfo}>
              <span className={styles.projectTag}>준공 완료</span>
              <h3 className={styles.projectTitle}>판교 테크원 타워</h3>
              <p className={styles.projectDesc}>첨단 IT 기업들을 위한 스마트 오피스 빌딩</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGxvb2tpbmclMjBhdCUyMGJsdWVwcmludHxlbnwxfHx8fDE3ODI0NTA1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Project B"
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}></div>
            <div className={styles.projectInfo}>
              <span className={`${styles.projectTag} ${styles['projectTag--active']}`}>시공 중</span>
              <h3 className={styles.projectTitle}>송도 해양 인프라 연구센터</h3>
              <p className={styles.projectDesc}>미래 해양 산업을 선도할 연구 단지 조성</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
