"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./capital-stack-diagram.module.css";

const FORK_LEFT = "M 105 0 L 105 29 L 210 29 L 210 58";
const FORK_RIGHT = "M 315 0 L 315 29 L 210 29";
const SPV_DROP = "M 1 0 L 1 44";

export function CapitalStackDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <div ref={ref} className={cn(styles.card, isInView && styles.play)}>
      <div className={styles.topRow}>
        <div className={`${styles.node} ${styles.nodeTeal}`}>
          <span className={styles.nodeLabel}>UK · EU DFI</span>
          <span className={styles.nodeValue}>Senior debt · ECB</span>
          <span className={styles.dotTeal} aria-hidden />
        </div>
        <div className={`${styles.node} ${styles.nodeGold}`}>
          <span className={styles.nodeLabel}>Sponsor · LP</span>
          <span className={styles.nodeValue}>Equity · FDI</span>
          <span className={styles.dotGold} aria-hidden />
        </div>
      </div>

      <svg
        className={styles.forkSvg}
        viewBox="0 0 420 58"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <marker
            id="capital-stack-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1.5 L8 5 L2 8.5"
              fill="none"
              stroke="#064e3b"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Static guide lines */}
        <path
          className={styles.forkTrack}
          d={FORK_LEFT}
          stroke="#064e3b"
          strokeWidth="1.5"
        />
        <path
          className={styles.forkTrackGold}
          d={FORK_RIGHT}
          stroke="#8a6a26"
          strokeWidth="1.5"
        />

        {/* Initial draw */}
        <path
          className={styles.forkLeft}
          d={FORK_LEFT}
          stroke="#064e3b"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          markerEnd="url(#capital-stack-arrow)"
        />
        <path
          className={styles.forkRight}
          d={FORK_RIGHT}
          stroke="#8a6a26"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Continuous flow along connectors */}
        <path
          className={styles.forkFlowTeal}
          d={FORK_LEFT}
          stroke="#064e3b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className={styles.forkFlowGold}
          d={FORK_RIGHT}
          stroke="#8a6a26"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <g className={styles.flowParticles}>
          <circle className={styles.particleTeal} r="3.5" fill="#064e3b">
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              path={FORK_LEFT}
            />
          </circle>
          <circle
            className={styles.particleTealSoft}
            r="2"
            fill="#064e3b"
            opacity="0.45"
          >
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              path={FORK_LEFT}
              begin="1.3s"
            />
          </circle>
          <circle className={styles.particleGold} r="3.5" fill="#8a6a26">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path={FORK_RIGHT}
            />
          </circle>
          <circle
            className={styles.particleGoldSoft}
            r="2"
            fill="#8a6a26"
            opacity="0.45"
          >
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path={FORK_RIGHT}
              begin="1.1s"
            />
          </circle>
        </g>
      </svg>

      <div className={styles.nodeHoldco}>
        <span className={styles.nodeLabel}>Offshore HoldCo</span>
        <span className={styles.nodeValue}>UK · DIFC · GIFT</span>
      </div>

      <div className={styles.dashedLink} aria-hidden>
        <div className={styles.dashedCircle} />
        <svg className={styles.dashedSvg} viewBox="0 0 2 44" fill="none">
          <line
            className={styles.dashedTrack}
            x1="1"
            y1="0"
            x2="1"
            y2="44"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <line
            className={styles.dashedSeg}
            x1="1"
            y1="0"
            x2="1"
            y2="44"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <line
            className={styles.dashedFlow}
            x1="1"
            y1="0"
            x2="1"
            y2="44"
            stroke="#6b7280"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle className={styles.particleGray} r="2.5" fill="#6b7280">
            <animateMotion
              dur="1.8s"
              repeatCount="indefinite"
              path={SPV_DROP}
            />
          </circle>
        </svg>
      </div>

      <div className={`${styles.node} ${styles.nodeSpv}`}>
        <span className={styles.nodeLabel}>Indian SPV</span>
        <span className={styles.nodeValue}>Project / Asset</span>
      </div>
    </div>
  );
}
