import pkg from "../../package.json";

describe('Main test', () => {

    test("Build command is configured in the package", () => {
        expect(pkg.bin.xbuild).toBe('bin/exec_build.js');
    });

    test("Server command is configured in the package", () => {
        expect(pkg.bin.xserver).toBe('bin/exec_server.js');
    });

    test("Test command is configured in the package", () => {
        expect(pkg.bin.xtest).toBe('bin/exec_test.js');
    });
});