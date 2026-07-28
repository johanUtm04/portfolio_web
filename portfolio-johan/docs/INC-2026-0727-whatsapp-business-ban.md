# Incident Report: Unsanctioned Marketing Activity Leading to WA Business Restrictions

## Header / Metadata

| Field | Value |
|---|---|
| **Incident ID** | INC-2026-0727 \| 09:57 CST |
| **Date / Time** | 27-07-2026 |
| **Analyst** | Johan Jael López Reyes |
| **Severity** | Low / Medium / High / Critical (Operational Impact and risk of Channel Loss) |

---

## Executive Summary

On Monday morning, the security/IT team was notified of a temporary account restriction on the primary WhatsApp Business number managed by the Marketing team. The account was placed on a 5-hour cooldown due to automated spam detection. Failure to address the root cause risks a permanent number ban, leading to complete loss of prospect communication channels and active lead history.

---

## Technical Details & Indicators

| Indicator | Detail |
|---|---|
| **Asset Affected** | Corporate iPhone (Marketing Department) |
| **Application** | WhatsApp Business (Standard Mobile App) |
| **Event Type** | Account Restriction / Rate Limiting |
| **Restriction Duration** | 05:44:20 (Countdown observed at 09:57 CST) |
| **Evidence** | Capture shared by the marketing team, showing an in-app system warning indicating suspected bulk messaging/spam behavior |

---

## Root Cause Analysis

The temporary suspension was triggered by a high volume of user-initiated reports. The marketing team executed an **unsegmented promotional broadcast** to inbound leads. Due to a lack of immediate response from the team, recipients categorized the unsolicited messages as spam and utilized WhatsApp's native **"Block & Report"** feature, triggering Meta's automated anti-spam threshold.

---

## Remediation & Mitigation

When we already knew about the situation, we decided to follow a few security measures to prevent a permanent account block. These measures are the following:

### Immediate Response (Pre-Unban Phase)
- **Hardening Account Privacy:** Modified app configuration under `Settings > Privacy > Groups` to "My Contacts" and enabled "Silence Unknown Callers".
- **Channel Isolation:** Disabled WhatsApp Web authentication attempts during the restriction window to prevent multi-device API session flags.

### Immediate Response (Post-Unban Phase)
- **First 30-Minute Triage:** Handled all incoming traffic exclusively from the physical iOS device to monitor real-time user behavior.
- **Backlog Clearance:** Executed manual blocking on malicious/bot entities and prioritized immediate, personalized responses to legitimate leads to mitigate further reporting.
- **Policy Adjustment:** Suspended unsegmented outbound broadcasts and initiated a review to transition high-volume marketing campaigns to the official WhatsApp Business API.
