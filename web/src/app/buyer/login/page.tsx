"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInBuyer, type AuthFormState } from "../actions";

const initial: AuthFormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary btn-lg btn-full"
      disabled={pending}
    >
      {pending ? "Signing in…" : "Sign In"}
    </button>
  );
}

export default function BuyerLoginPage() {
  const [state, formAction] = useActionState(signInBuyer, initial);

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-left__bg" />
        <div className="auth-left__grid" />
        <div className="auth-left__content">
          <div className="auth-left__logo">
            <Link href="/buyer/login" className="logo-mark">
              <span className="logo-icon">
                <i className="fas fa-chevron-right" />
              </span>
              <span className="logo-word">
                BRND <span className="logo-accent">DIRECT</span>
              </span>
            </Link>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(79,70,229,.2)",
              color: "var(--color-accent-light)",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            <i className="fas fa-store" /> Buyer Portal
          </div>

          <h1>
            Welcome
            <br />
            back.
          </h1>
          <p>
            Sign in to your wholesale buyer account — browse thousands of
            verified brands, place orders, and manage your business in real
            time.
          </p>

          <div className="auth-benefits">
            <div className="auth-benefit">
              <div
                className="auth-benefit-icon"
                style={{
                  background: "rgba(79,70,229,.2)",
                  color: "var(--color-accent-light)",
                }}
              >
                <i className="fas fa-warehouse" />
              </div>
              <div className="auth-benefit-content">
                <div className="auth-benefit-title">We Own the Inventory</div>
                <div className="auth-benefit-desc">
                  Premium brands, verified stock, ready to ship from day one.
                </div>
              </div>
            </div>
            <div className="auth-benefit">
              <div
                className="auth-benefit-icon"
                style={{ background: "rgba(16,185,129,.2)", color: "#34d399" }}
              >
                <i className="fas fa-credit-card" />
              </div>
              <div className="auth-benefit-content">
                <div className="auth-benefit-title">Flexible Net Terms</div>
                <div className="auth-benefit-desc">
                  Net 30/60/90 and BNPL at checkout — no third-party apps.
                </div>
              </div>
            </div>
            <div className="auth-benefit">
              <div
                className="auth-benefit-icon"
                style={{ background: "rgba(245,158,11,.15)", color: "#fbbf24" }}
              >
                <i className="fas fa-truck-fast" />
              </div>
              <div className="auth-benefit-content">
                <div className="auth-benefit-title">Same-Day Fulfilment</div>
                <div className="auth-benefit-desc">
                  Automated order routing with real-time tracking on every
                  shipment.
                </div>
              </div>
            </div>
          </div>

          <div className="auth-stats">
            <div className="auth-stat-item">
              <span className="auth-stat-value">500+</span>
              <span className="auth-stat-label">Verified Brands</span>
            </div>
            <div className="auth-stat-divider" />
            <div className="auth-stat-item">
              <span className="auth-stat-value">48h</span>
              <span className="auth-stat-label">Avg. Ship Time</span>
            </div>
            <div className="auth-stat-divider" />
            <div className="auth-stat-item">
              <span className="auth-stat-value">$32T</span>
              <span className="auth-stat-label">TAM Market</span>
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: "rgba(255,255,255,.3)",
                marginBottom: 10,
              }}
            >
              Are you a brand / seller?
            </div>
            <Link
              href="/seller/index.html"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: ".82rem",
                fontWeight: 600,
                color: "rgba(255,255,255,.5)",
                border: "1px solid rgba(255,255,255,.12)",
                padding: "8px 16px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <i className="fas fa-box-open" /> Switch to Brand Portal →
            </Link>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card fade-in">
          <div className="auth-card__logo">
            <Link href="/buyer/login" className="logo-mark">
              <span className="logo-icon">
                <i className="fas fa-chevron-right" />
              </span>
              <span className="logo-word logo-word--dark">
                BRND <span className="logo-accent logo-accent--dark">DIRECT</span>
              </span>
            </Link>
          </div>

          <h2>Buyer Sign In</h2>
          <p className="auth-card__sub">
            New here?{" "}
            <Link href="/buyer/register">Create a free buyer account →</Link>
          </p>

          {state.error ? (
            <p
              className="auth-card__sub"
              style={{ color: "var(--color-rose)", marginBottom: 12 }}
            >
              {state.error}
            </p>
          ) : null}

          <form className="login-form" action={formAction}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <div className="input-group">
                <i className="fas fa-envelope input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div className="input-group">
                <i className="fas fa-lock input-icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input has-suffix"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <Link href="/buyer/reset-password.html" className="forgot-link">
              Forgot password?
            </Link>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
