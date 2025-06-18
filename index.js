const { IModelHost, SnapshotDb } = require("@itwin/core-backend");

async function createEmptyBim() {
    await IModelHost.startup();

    const bimPath = "C:/dev/vue/23_SP3D/Vue/temp/empty.bim";
    const rootSubject = { name: "Root Subject" };

    // 创建空的快照 iModel（.bim 文件）
    const iModel = SnapshotDb.createEmpty(bimPath, { rootSubject, createClassViews: true });


    iModel.close();
    await IModelHost.shutdown();
    console.log("Empty BIM file created at:", bimPath);
}

createEmptyBim().catch(console.error);