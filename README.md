# JINSC (金欣全精密工業) - Web Portal

專業機械軸封與油封專家。本專案使用 React + Vite + TypeScript 開發。

## 開發步驟 (Local Development)

若要在您的電腦上執行此專案，請按照以下步驟操作：

### 1. 安裝 Node.js
請前往 [Node.js 官方網站](https://nodejs.org/) 下載並安裝 **LTS (穩定版)**。安裝完成後，開啟終端機 (Terminal) 輸入 `node -v` 確認是否安裝成功。

### 2. 安裝專案套件
在專案根目錄下執行：
```bash
npm install
```

### 3. 啟動開發伺服器
執行以下指令，專案將運行在 `http://localhost:3000`：
```bash
npm run dev
```

### 4. 建立生產版本
若要打包專案：
```bash
npm run build
```

---

## 部署說明 (Deployment)

### 自動化部署
本專案已設定 **GitHub Actions**。當您將程式碼推送到 `main` 分支時，系統會自動執行編譯並部署至 **GitHub Pages**。

- 流程檔案位置：`.github/workflows/deploy.yml`

### 注意事項
- 請確保專案的 GitHub Repo 設定中，`Settings > Pages > Build and deployment > Source` 選擇 `GitHub Actions`。
- 如果專案部署在 `https://<username>.github.io/<repo>/`，請確保 `vite.config.ts` 中的 `base` 路徑設定正確。

---

## 專案結構
- `App.tsx`: 主要路由與頁面結構
- `components/`: 重複使用的 UI 組件
- `constants.tsx`: 站內所有文字與產品資訊 (多語系設定)
- `services/`: API 呼叫或 GenAI 串接邏輯
