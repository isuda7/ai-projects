import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import styles from "./Products.module.scss";

export default function Products() {
  const projects = [
    {
      id: 1,
      title: "판교 테크원 타워",
      category: "오피스 / 상업시설",
      status: "준공완료",
      year: "2023",
      image: "https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc4MjM2MjQzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "첨단 IT 기업들을 위한 스마트 오피스 빌딩. 친환경 자재 사용 및 에너지 효율 1등급 달성."
    },
    {
      id: 2,
      title: "송도 해양 인프라 연구센터",
      category: "연구시설",
      status: "시공중",
      year: "2025 예정",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGxvb2tpbmclMjBhdCUyMGJsdWVwcmludHxlbnwxfHx8fDE3ODI0NTA1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "미래 해양 산업을 선도할 연구 단지 조성. 해풍에 견디는 특수 외장재 적용."
    },
    {
      id: 3,
      title: "제2경부고속도로 터널 공구",
      category: "토목 / 인프라",
      status: "시공중",
      year: "2024 예정",
      image: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBoZWF2eSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODI0NTA1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "최신 TBM 공법을 적용하여 안전하고 빠른 터널 굴착 진행. 교통 인프라 확충에 기여."
    },
    {
      id: 4,
      title: "에코시티 자이 아파트",
      category: "주거시설",
      status: "준공완료",
      year: "2022",
      image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MjM3MzgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "자연 친화적인 조경과 스마트홈 시스템이 결합된 프리미엄 주거 공간."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>사업 실적 (제품소개)</h1>
        <p className={styles.desc}>
          BuildCore가 참여한 다양한 건설 프로젝트와 완공된 주요 건축물들을 소개합니다.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.tags}>
                <span className={styles.tagCategory}>
                  {project.category}
                </span>
                <span className={`${styles.tagStatus} ${
                  project.status === "준공완료" ? styles["tagStatus--completed"] : styles["tagStatus--active"]
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.year}>{project.year}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
