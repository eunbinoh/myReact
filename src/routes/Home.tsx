import { useNavigate } from "react-router-dom";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const features: Feature[] = [
    {
      icon: '🔒',
      title: 'Safe Exchange',
      description: '검증된 사용자와의 안전한 거래를 통해 믿을 수 있는 교환을 보장받는 시스템',
    },
    {
      icon: '🌱',
      title: 'Save Earth',
      description: '일회성으로 버려지는 물건을 줄이고 무분별한 자원 소비를 되살려 환경을 보호하는 운동',
    },
    {
      icon: '💰',
      title: 'Save Money',
      description: '나에게 필요없는 물건으로 필요한 다른 물건을 얻을 수 있는 재생산적 화폐 시장 운동',
    },
  ];

  const steps: Step[] = [
    {
      number: 1,
      title: '아이템 등록',
      description: '내가 가진 물건의 사진과 설명을 등록하고 맞교환 희망하는 물건을 제시하세요.',
    },
    {
      number: 2,
      title: '트레이드',
      description: '교환을 희망하는 대상의 물건을 볼 수 있고, 호스트에게 직접 교환을 제안할 수 있어요.',
    },
    {
      number: 3,
      title: '포스트',
      description: '내 아이템의 특별한 사연, 스토리가 있다면 공유하고 어필해보세요.',
    },
  ];

  const exchangeItems: string[] = ['📱', '📚', '🎮', '👜'];

  return (
    <div className="main-page">
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              물물교환<br />
              Item / Item Exchange
            </h1>
            <p className="subtitle">
              필요 없는 물건을 원하는 물건으로 바꿔보세요.<br />
              새로운 구매와 소비의 패러다임을 경험하세요.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate('/items')}
              >
                아이템 등록하기
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/mine')}
              >
                아이템 둘러보기
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="exchange-animation">
              {exchangeItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`item-circle item-${index + 1}`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {item}
                </div>
              ))}
              <div className="exchange-center">⇄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <h2 className="section-title">Water Water Ex?</h2>
          <p className="section-subtitle">
            물물교환 플랫폼이자 가치 재생산 운동이란 뜻을 담았습니다.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="how-it-works">
        <div className="steps-container">
          <h2 className="section-title">어떻게 이용하면 되나요?</h2>
          <p className="section-subtitle">3가지 플로우를 제공합니다.</p>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>지금 바로 시작하세요</h2>
          <p>집에 잠들어 있는 물건들을 꼭 필요한 가치로 바꿔보세요.</p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/items')}
          >
            시작하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
