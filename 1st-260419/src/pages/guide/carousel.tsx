// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi  } from '@/components/ui/carousel';
import { Card, CardContent  } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const CarouselAutoplayDemo = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = React.useState(true);
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  React.useEffect(() => {
    if (!api) return;
    
    api.on("autoplay:play", () => setIsPlaying(true));
    api.on("autoplay:stop", () => setIsPlaying(false));
  }, [api]);

  const toggleAutoplay = () => {
    const autoplay = api?.plugins()?.autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Button variant="outline" size="icon" onClick={toggleAutoplay}>
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
    </div>
  );
};



const CarouselGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Carousel</h1>
        <p className={styles.description}>
          Embla Carousel을 래핑하여 이미지나 다양한 컨텐츠를 슬라이드 형태로 보여줍니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Carousel 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
          </p>
          
          <div className={styles['spec_table_wrapper']}>
            <table className={styles['spec_table']}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>opts</code></td>
                  <td><code>CarouselOptions</code></td>
                  <td><code>{}</code></td>
                  <td>Embla Carousel 초기화 옵션 (예: align, loop)</td>
                </tr>
                <tr>
                  <td><code>plugins</code></td>
                  <td><code>CarouselPlugin[]</code></td>
                  <td><code>[]</code></td>
                  <td>Autoplay 등 추가 플러그인 배열</td>
                </tr>
                <tr>
                  <td><code>orientation</code></td>
                  <td><code>"horizontal" | "vertical"</code></td>
                  <td><code>"horizontal"</code></td>
                  <td>슬라이드 방향</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext  } from '@/components/ui/carousel';
import { Card, CardContent  } from '@/components/ui/card';

// Basic Component Usage
<Carousel opts={{ align: "start", loop: true }}>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
              </code>
            </pre>
          </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            가장 기본적인 형태의 렌더링 예제입니다.
          </p>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            
              <div className="px-12 w-full max-w-sm"><Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel></div>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Carousel opts={{ align: "start", loop: true }}>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Multiple Items Per View</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>클래스를 통해 화면당 보여지는 슬라이드 갯수를 조절할 수 있습니다.</p>
          <div className={styles.preview}>
            
              <div className="px-12 w-full max-w-md"><Carousel className="w-full">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1"><Card><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-xl">{index + 1}</span></CardContent></Card></div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel></div>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Outside Navigation Buttons</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>영역 밖 하단에 버튼을 커스텀 배치한 형태입니다.</p>
          <div className={styles.preview}>
            <div className="w-full max-w-md relative pb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1"><Card><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-xl">{index + 1}</span></CardContent></Card></div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -bottom-2 right-0 flex gap-2">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Autoplay & Play/Pause Controls</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>자동 재생 플러그인과 커스텀 재생/정지 버튼을 추가한 예제입니다. (Hover시 일시정지됩니다)</p>
          <div className={styles.preview}>
            <CarouselAutoplayDemo />
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default CarouselGuidePage;
