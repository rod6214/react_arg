import pkg from "../../package.json";

describe('Main test', () => {

    test("Build command is configured in the package", () => {
        expect(pkg.bin.xbuild, "Build command is not in the folder").toBe('bin/exec_build.js');
    });

    test("Server command is configured in the package", () => {
        expect(pkg.bin.xserver, "Server command is not in the folder").toBe('bin/exec_server.js');
    });

    test("Test command is configured in the package", () => {
        expect(pkg.bin.xtest, "Test command is not in the folder").toBe('bin/exec_test.js');
    });
});