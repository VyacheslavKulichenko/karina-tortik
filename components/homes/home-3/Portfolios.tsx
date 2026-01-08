"use client";
import StackCards from "@/components/animation/StackCards";
import { usePortfolio } from "@/contexts/PortfolioContext";

import { home3 } from "@/data/portfolios.json";
export default function Portfolios() {
  const { setSelectedPortfolio } = usePortfolio();
  return (
    <section
      id="portfolio"
      className="inner inner-stack-bottom no-padding-top portfolio"
    >
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Content Start */}
            <div className="col-12">
              <div className="inner__content">
                {/* Content Block - Portfolio Stacking Cards Start */}
                <div className="content__block">
                  <StackCards
                    stackName="portfolio-stack"
                    className="stack-wrapper"
                  >
                    {home3.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedPortfolio(item)}
                        className={`portfolio-stack__inner popup-trigger portfolio-item-${
                          index + 1
                        }`}
                        style={{ backgroundImage: `url(${item.landscape})` }}
                      >
                        <div className="portfolio-stack__descr">
                          <h3
                            className={`portfolio-stack__title ${item.style}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`portfolio-stack__text type-basic-160lh  ${item.style} `}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </StackCards>
                </div>
                {/* Content Block - Portfolio Stacking Cards End */}
              </div>
            </div>
            {/* Inner Section Content End */}
          </div>
        </div>
      </div>
    </section>
  );
}
