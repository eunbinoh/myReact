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
  const features: Feature[] = [
    {
      icon: '🔒',
      title: '안전한 거래',
      description: '검증된 사용자와 안전한 거래 시스템으로 믿을 수 있는 교환을 보장합니다.',
    },
    {
      icon: '🌱',
      title: '지속가능한 소비',
      description: '버려지는 물건을 줄이고 자원을 재활용하여 환경을 보호합니다.',
    },
    {
      icon: '💰',
      title: '경제적 혜택',
      description: '돈을 쓰지 않고도 필요한 물건을 얻을 수 있는 새로운 경제 모델입니다.',
    },
  ];

  const steps: Step[] = [
    {
      number: 1,
      title: '아이템 등록',
      description: '교환하고 싶은 물건을 사진과 함께 등록하고 원하는 물건을 명시하세요.',
    },
    {
      number: 2,
      title: '매칭 찾기',
      description: 'AI가 최적의 교환 파트너를 찾아드리거나 직접 검색해서 찾을 수 있습니다.',
    },
    {
      number: 3,
      title: '안전한 교환',
      description: '안전한 만남 장소에서 교환하거나 배송 서비스를 이용해 교환을 완료하세요.',
    },
  ];

  const exchangeItems: string[] = ['📱', '📚', '🎮', '👜'];

  const handleButtonClick = (action: string) => {
    console.log(`${action} 버튼 클릭됨`);
  };

  return (
    <div className="main-page">
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              물물교환<br />
              새로운 경험
            </h1>
            <p className="subtitle">
              필요 없는 물건을 가치 있는 물건으로 바꿔보세요.<br />
              지속 가능한 소비의 새로운 패러다임을 경험하세요.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => handleButtonClick('교환 시작하기')}
              >
                교환 시작하기
              </button>
              <button 
                className="btn-secondary"
                onClick={() => handleButtonClick('둘러보기')}
              >
                둘러보기
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
          <h2 className="section-title">왜 Water Water Exchange일까요?</h2>
          <p className="section-subtitle">
            안전하고 편리한 물물교환 플랫폼으로 새로운 가치를 발견하세요
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
          <h2 className="section-title">어떻게 작동하나요?</h2>
          <p className="section-subtitle">간단한 3단계로 물물교환을 시작하세요</p>
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
          <p>집에 잠들어 있는 물건들을 새로운 가치로 바꿔보세요</p>
          <button 
            className="btn-primary"
            onClick={() => handleButtonClick('무료로 시작하기')}
          >
            시작하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
