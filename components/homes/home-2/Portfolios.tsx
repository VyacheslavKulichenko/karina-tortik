"use client";
import RevealText from "@/components/animation/RevealText";
import StackCards from "@/components/animation/StackCards";

import { home2 } from "@/data/portfolios.json";

import { usePortfolio, Portfolio } from "@/contexts/PortfolioContext";

export default function Portfolios() {
  return (
    <>
      <section id="portfolio" className="inner inner-stack-bottom portfolio">
        <div className="inner__wrapper">
          <div className="container-fluid p-0">
            <div className="row g-0">
              {/* Inner Section Name Start */}
              <div className="col-12 col-xl-2">
                <div className="inner__name">
                  {/* Content Block - Section Name Start */}
                  <div className="content__block name-block">
                    <span className="section-name icon-right animate-in-up">
                      <span className="section-name-caption">Portfolio</span>
                      <i className="ph ph-arrow-down-right" />
                    </span>
                  </div>
                  {/* Content Block - Section Name Start */}
                </div>
              </div>
              {/* Inner Section Name End */}
              {/* Inner Section Content Start */}
              <div className="col-12 col-xl-8">
                <div className="inner__content">
                  {/* Content Block - H2 Section Title Start */}
                  <div className="content__block pre-stack-block">
                    <div className="block__descr">
                      <RevealText as="h2" className=" animate-in-up">
                        Design, tech &amp;
                        <br />
                        some magic
                      </RevealText>
                    </div>
                  </div>
                  {/* Content Block - H2 Section Title End */}
                  {/* Content Block - Portfolio Gallery Stack Grid Start */}
                  <div className="content__block">
                    <StackCards
                      stackName="portfolio-stack"
                      className="stack-wrapper"
                    >
                      {home2.map((item, index) => (
                        <PortfolioItem
                          key={String(item.id)}
                          item={item}
                          index={index}
                        />
                      ))}
                    </StackCards>
                  </div>
                  {/* Content Block - Portfolio Gallery Stack Grid End */}
                </div>
              </div>
              {/* Inner Section Content End */}
              {/* Inner Section Aside Start */}
              <div className="col-12 col-xl-2" />
              {/* Inner Section Aside End */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PortfolioItem({ item }: { item: Portfolio; index: number }) {
  const { setSelectedPortfolio } = usePortfolio();
  return (
    <div
      onClick={() => setSelectedPortfolio(item)}
      className={`portfolio-stack__inner 
      } popup-trigger`}
      style={{ backgroundImage: `url(${item.landscape})` }}
    >
      <div className="portfolio-stack__descr">
        <h5 className={`portfolio-stack__title ${item.style}`}>{item.title}</h5>
      </div>
    </div>
  );
}
