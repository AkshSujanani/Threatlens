# THREATLENS

*THREATLENS* is an AI-enhanced cybersecurity monitoring and risk-intelligence platform. 
It collects security events from authorized systems, standardizes them, analyzes them 
using both predefined security rules and machine-learning anomaly detection, calculates risk, generates alerts/incidents, 
and presents them through a dashboard.

Instead of relying on only on predefined rules or only on machine learning, Threatlens uses a hybrid detection approach.
- Rule based detection identifies know suspicious behaviour and vulnerablilites.
- While ML anamoly detection identifies uncommon behaviour.
---
### v0.1
For the initial prototype, we are focusing on one complete end-to-end workflow: 
A Python agent monitors a Windows endpoint, sends security events to a FastAPI backend, the events are stored and analyzed 
using rules and an Isolation Forest model, risk is calculated, alerts and incidents are generated, and the results are 
displayed through a web-dashboard.
