import { useApp } from "../../context.jsx";
import SessionCard from "../session-card/index.jsx";
import OverviewView from "../overview-view/index.jsx";
import AiChat from "../ai-view/index.jsx";
import DeviceView from "../device-view/index.jsx";
import AlarmView from "../alarm-view/index.jsx";
import SettingsView from "../settings-view/index.jsx";
import "./index.css";

// Layer 4: 菜单内容区 — 按侧边菜单切换视图
// 总览:左侧会话卡片(540px × 100%) + 右侧原 KPI/图表内容
// AI:左侧 AI 会话卡片(540px × 100%) + 右侧留白
export default function ContentArea() {
  const { activeMenu } = useApp();

  if (activeMenu === "overview") {
    return (
      <main className="content-area is-overview">
        <SessionCard />
        <div className="overview-aside">
          <OverviewView />
        </div>
      </main>
    );
  }

  if (activeMenu === "ai") {
    return (
      <main className="content-area is-overview">
        <AiChat />
        <div className="overview-aside" />
      </main>
    );
  }

  return (
    <main className="content-area">
      {activeMenu === "devices" && <DeviceView />}
      {activeMenu === "alarms" && <AlarmView />}
      {activeMenu === "settings" && <SettingsView />}
    </main>
  );
}
