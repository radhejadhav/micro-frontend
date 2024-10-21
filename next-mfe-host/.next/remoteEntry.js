/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.federation/entry.696383161b1a5cf2b22663902d5bcfca.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.federation/entry.696383161b1a5cf2b22663902d5bcfca.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js");
/* harmony import */ var _home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_nextjs_mf_dist_src_plugins_container_runtimePlugin_js_runtimePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@module-federation/nextjs-mf/dist/src/plugins/container/runtimePlugin.js?runtimePlugin */ "./node_modules/@module-federation/nextjs-mf/dist/src/plugins/container/runtimePlugin.js?runtimePlugin");



if(!__webpack_require__.federation.runtime){
	var prevFederation = __webpack_require__.federation;
	__webpack_require__.federation = {}
	for(var key in _home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"]){
		__webpack_require__.federation[key] = _home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"][key];
	}
	for(var key in prevFederation){
		__webpack_require__.federation[key] = prevFederation[key];
	}
}
if(!__webpack_require__.federation.instance){
	const pluginsToAdd = [
		_home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_nextjs_mf_dist_src_plugins_container_runtimePlugin_js_runtimePlugin__WEBPACK_IMPORTED_MODULE_1__["default"] ? (_home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_nextjs_mf_dist_src_plugins_container_runtimePlugin_js_runtimePlugin__WEBPACK_IMPORTED_MODULE_1__["default"]["default"] || _home_cloud_ops_Desktop_microfrontend_next_mfe_host_node_modules_module_federation_nextjs_mf_dist_src_plugins_container_runtimePlugin_js_runtimePlugin__WEBPACK_IMPORTED_MODULE_1__["default"])() : false,
	].filter(Boolean);
	__webpack_require__.federation.initOptions.plugins = __webpack_require__.federation.initOptions.plugins ? 
	__webpack_require__.federation.initOptions.plugins.concat(pluginsToAdd) : pluginsToAdd;
	__webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
	if(__webpack_require__.federation.attachShareScopeMap){
		__webpack_require__.federation.attachShareScopeMap(__webpack_require__)
	}
	if(__webpack_require__.federation.installInitialConsumes){
		__webpack_require__.federation.installInitialConsumes()
	}
}

/***/ }),

/***/ "./node_modules/@module-federation/runtime/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/index.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FederationHost: function() { return /* binding */ FederationHost; },
/* harmony export */   getInstance: function() { return /* binding */ getInstance; },
/* harmony export */   getRemoteEntry: function() { return /* binding */ getRemoteEntry; },
/* harmony export */   getRemoteInfo: function() { return /* binding */ getRemoteInfo; },
/* harmony export */   init: function() { return /* binding */ init; },
/* harmony export */   loadRemote: function() { return /* binding */ loadRemote; },
/* harmony export */   loadScript: function() { return /* reexport safe */ _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScript; },
/* harmony export */   loadScriptNode: function() { return /* reexport safe */ _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScriptNode; },
/* harmony export */   loadShare: function() { return /* binding */ loadShare; },
/* harmony export */   loadShareSync: function() { return /* binding */ loadShareSync; },
/* harmony export */   preloadRemote: function() { return /* binding */ preloadRemote; },
/* harmony export */   registerGlobalPlugins: function() { return /* reexport safe */ _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.H; },
/* harmony export */   registerPlugins: function() { return /* binding */ registerPlugins; },
/* harmony export */   registerRemotes: function() { return /* binding */ registerRemotes; }
/* harmony export */ });
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.esm.js */ "./node_modules/@module-federation/runtime/dist/polyfills.esm.js");
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");
/* harmony import */ var _share_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share.esm.js */ "./node_modules/@module-federation/runtime/dist/share.esm.js");






// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
    for (const remote of remotes){
        // match pkgName
        const isNameMatched = id.startsWith(remote.name);
        let expose = id.replace(remote.name, '');
        if (isNameMatched) {
            if (expose.startsWith('/')) {
                const pkgNameOrAlias = remote.name;
                expose = `.${expose}`;
                return {
                    pkgNameOrAlias,
                    expose,
                    remote
                };
            } else if (expose === '') {
                return {
                    pkgNameOrAlias: remote.name,
                    expose: '.',
                    remote
                };
            }
        }
        // match alias
        const isAliasMatched = remote.alias && id.startsWith(remote.alias);
        let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
        if (remote.alias && isAliasMatched) {
            if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
                const pkgNameOrAlias = remote.alias;
                exposeWithAlias = `.${exposeWithAlias}`;
                return {
                    pkgNameOrAlias,
                    expose: exposeWithAlias,
                    remote
                };
            } else if (exposeWithAlias === '') {
                return {
                    pkgNameOrAlias: remote.alias,
                    expose: '.',
                    remote
                };
            }
        }
    }
    return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
    for (const remote of remotes){
        const isNameMatched = nameOrAlias === remote.name;
        if (isNameMatched) {
            return remote;
        }
        const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
        if (isAliasMatched) {
            return remote;
        }
    }
    return;
}

function registerPlugins$1(plugins, hookInstances) {
    const globalPlugins = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    // Incorporate global plugins
    if (globalPlugins.length > 0) {
        globalPlugins.forEach((plugin)=>{
            if (plugins == null ? void 0 : plugins.find((item)=>item.name !== plugin.name)) {
                plugins.push(plugin);
            }
        });
    }
    if (plugins && plugins.length > 0) {
        plugins.forEach((plugin)=>{
            hookInstances.forEach((hookInstance)=>{
                hookInstance.applyPlugin(plugin);
            });
        });
    }
    return plugins;
}

async function loadEsmEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                // eslint-disable-next-line no-eval
                new Function('callbacks', `import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
                    resolve,
                    reject
                ]);
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function loadSystemJsEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                // eslint-disable-next-line no-eval
                new Function('callbacks', `System.import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
                    resolve,
                    reject
                ]);
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function loadEntryScript({ name, globalName, entry, createScriptHook }) {
    const { entryExports: remoteEntryExports } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScript)(entry, {
        attrs: {},
        createScriptHook: (url, attrs)=>{
            const res = createScriptHook.emit({
                url,
                attrs
            });
            if (!res) return;
            if (res instanceof HTMLScriptElement) {
                return res;
            }
            if ('script' in res || 'timeout' in res) {
                return res;
            }
            return;
        }
    }).then(()=>{
        const { remoteEntryKey, entryExports } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(name, globalName);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(entryExports, `
      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
      Possible reasons could be:\n
      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n
      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
    `);
        return entryExports;
    }).catch((e)=>{
        throw e;
    });
}
async function loadEntryDom({ remoteInfo, remoteEntryExports, createScriptHook }) {
    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
    switch(type){
        case 'esm':
        case 'module':
            return loadEsmEntry({
                entry,
                remoteEntryExports
            });
        case 'system':
            return loadSystemJsEntry({
                entry,
                remoteEntryExports
            });
        default:
            return loadEntryScript({
                entry,
                globalName,
                name,
                createScriptHook
            });
    }
}
async function loadEntryNode({ remoteInfo, createScriptHook }) {
    const { entry, entryGlobalName: globalName, name } = remoteInfo;
    const { entryExports: remoteEntryExports } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScriptNode)(entry, {
        attrs: {
            name,
            globalName
        },
        createScriptHook: (url, attrs)=>{
            const res = createScriptHook.emit({
                url,
                attrs
            });
            if (!res) return;
            if ('url' in res) {
                return res;
            }
            return;
        }
    }).then(()=>{
        const { remoteEntryKey, entryExports } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(name, globalName);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(entryExports, `
      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
      Possible reasons could be:\n
      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n
      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
    `);
        return entryExports;
    }).catch((e)=>{
        throw e;
    });
}
function getRemoteEntryUniqueKey(remoteInfo) {
    const { entry, name } = remoteInfo;
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.composeKeyWithSeparator)(name, entry);
}
async function getRemoteEntry({ origin, remoteEntryExports, remoteInfo }) {
    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    if (!_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[uniqueKey]) {
        const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
        if (loadEntryHook.listeners.size) {
            _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[uniqueKey] = loadEntryHook.emit({
                createScriptHook: origin.loaderHook.lifecycle.createScript,
                remoteInfo,
                remoteEntryExports
            }).then((res)=>res || undefined);
        } else {
            const createScriptHook = origin.loaderHook.lifecycle.createScript;
            if (!(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)()) {
                _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[uniqueKey] = loadEntryNode({
                    remoteInfo,
                    createScriptHook
                });
            } else {
                _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[uniqueKey] = loadEntryDom({
                    remoteInfo,
                    remoteEntryExports,
                    createScriptHook
                });
            }
        }
    }
    return _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[uniqueKey];
}
function getRemoteInfo(remote) {
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, remote, {
        entry: 'entry' in remote ? remote.entry : '',
        type: remote.type || _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.D,
        entryGlobalName: remote.entryGlobalName || remote.name,
        shareScope: remote.shareScope || _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.b
    });
}

let Module = class Module {
    async getEntry() {
        if (this.remoteEntryExports) {
            return this.remoteEntryExports;
        }
        // Get remoteEntry.js
        const remoteEntryExports = await getRemoteEntry({
            origin: this.host,
            remoteInfo: this.remoteInfo,
            remoteEntryExports: this.remoteEntryExports
        });
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(remoteEntryExports, `remoteEntryExports is undefined \n ${(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.safeToString)(this.remoteInfo)}`);
        this.remoteEntryExports = remoteEntryExports;
        return this.remoteEntryExports;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(id, expose, options) {
        const { loadFactory = true } = options || {
            loadFactory: true
        };
        // Get remoteEntry.js
        const remoteEntryExports = await this.getEntry();
        if (!this.inited) {
            const localShareScopeMap = this.host.shareScopeMap;
            const remoteShareScope = this.remoteInfo.shareScope || 'default';
            if (!localShareScopeMap[remoteShareScope]) {
                localShareScopeMap[remoteShareScope] = {};
            }
            const shareScope = localShareScopeMap[remoteShareScope];
            const initScope = [];
            const remoteEntryInitOptions = {
                version: this.remoteInfo.version || ''
            };
            // Help to find host instance
            Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
                value: localShareScopeMap,
                // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
                enumerable: false
            });
            const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope,
                // @ts-ignore shareScopeMap will be set by Object.defineProperty
                remoteEntryInitOptions,
                initScope,
                remoteInfo: this.remoteInfo,
                origin: this.host
            });
            if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
                console.error('The remote entry interface does not contain "init"', '\n', 'Ensure the name of this remote is not reserved or in use. Check if anything already exists on window[nameOfRemote]', '\n', 'Ensure that window[nameOfRemote] is returning a {get,init} object.');
            }
            await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
            await this.host.hooks.lifecycle.initContainer.emit((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, initContainerOptions, {
                remoteEntryExports
            }));
        }
        this.lib = remoteEntryExports;
        this.inited = true;
        // get exposeGetter
        const moduleFactory = await remoteEntryExports.get(expose);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(moduleFactory, `${(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.remoteInfo)} remote don't export ${expose}.`);
        const wrapModuleFactory = this.wraperFactory(moduleFactory, id);
        if (!loadFactory) {
            return wrapModuleFactory;
        }
        const exposeContent = await wrapModuleFactory();
        return exposeContent;
    }
    wraperFactory(moduleFactory, id) {
        function defineModuleId(res, id) {
            if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
                Object.defineProperty(res, Symbol.for('mf_module_id'), {
                    value: id,
                    enumerable: false
                });
            }
        }
        if (moduleFactory instanceof Promise) {
            return async ()=>{
                const res = await moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        } else {
            return ()=>{
                const res = moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        }
    }
    constructor({ remoteInfo, host }){
        this.inited = false;
        this.lib = undefined;
        this.remoteInfo = remoteInfo;
        this.host = host;
    }
};

class SyncHook {
    on(fn) {
        if (typeof fn === 'function') {
            this.listeners.add(fn);
        }
    }
    once(fn) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.on(function wrapper(...args) {
            self.remove(wrapper);
            // eslint-disable-next-line prefer-spread
            return fn.apply(null, args);
        });
    }
    emit(...data) {
        let result;
        if (this.listeners.size > 0) {
            // eslint-disable-next-line prefer-spread
            this.listeners.forEach((fn)=>{
                result = fn(...data);
            });
        }
        return result;
    }
    remove(fn) {
        this.listeners.delete(fn);
    }
    removeAll() {
        this.listeners.clear();
    }
    constructor(type){
        this.type = '';
        this.listeners = new Set();
        if (type) {
            this.type = type;
        }
    }
}

class AsyncHook extends SyncHook {
    emit(...data) {
        let result;
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const call = (prev)=>{
                if (prev === false) {
                    return false; // Abort process
                } else if (i < ls.length) {
                    return Promise.resolve(ls[i++].apply(null, data)).then(call);
                } else {
                    return prev;
                }
            };
            result = call();
        }
        return Promise.resolve(result);
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
    if (!(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.i)(returnedData)) {
        return false;
    }
    if (originalData !== returnedData) {
        // eslint-disable-next-line no-restricted-syntax
        for(const key in originalData){
            if (!(key in returnedData)) {
                return false;
            }
        }
    }
    return true;
}
class SyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.i)(data)) {
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f)(`The data for the "${this.type}" hook should be an object.`);
        }
        for (const fn of this.listeners){
            try {
                const tempData = fn(data);
                if (checkReturnData(data, tempData)) {
                    data = tempData;
                } else {
                    this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                    break;
                }
            } catch (e) {
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(e);
                this.onerror(e);
            }
        }
        return data;
    }
    constructor(type){
        super();
        this.onerror = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f;
        this.type = type;
    }
}

class AsyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.i)(data)) {
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f)(`The response data for the "${this.type}" hook must be an object.`);
        }
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const processError = (e)=>{
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(e);
                this.onerror(e);
                return data;
            };
            const call = (prevData)=>{
                if (checkReturnData(data, prevData)) {
                    data = prevData;
                    if (i < ls.length) {
                        try {
                            return Promise.resolve(ls[i++](data)).then(call, processError);
                        } catch (e) {
                            return processError(e);
                        }
                    }
                } else {
                    this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                }
                return data;
            };
            return Promise.resolve(call(data));
        }
        return Promise.resolve(data);
    }
    constructor(type){
        super();
        this.onerror = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f;
        this.type = type;
    }
}

class PluginSystem {
    applyPlugin(plugin) {
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.h)(plugin), 'Plugin configuration is invalid.');
        // The plugin's name is mandatory and must be unique
        const pluginName = plugin.name;
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(pluginName, 'A name must be provided by the plugin.');
        if (!this.registerPlugins[pluginName]) {
            this.registerPlugins[pluginName] = plugin;
            Object.keys(this.lifecycle).forEach((key)=>{
                const pluginLife = plugin[key];
                if (pluginLife) {
                    this.lifecycle[key].on(pluginLife);
                }
            });
        }
    }
    removePlugin(pluginName) {
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(pluginName, 'A name is required.');
        const plugin = this.registerPlugins[pluginName];
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(plugin, `The plugin "${pluginName}" is not registered.`);
        Object.keys(plugin).forEach((key)=>{
            if (key !== 'name') {
                this.lifecycle[key].remove(plugin[key]);
            }
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    inherit({ lifecycle, registerPlugins }) {
        Object.keys(lifecycle).forEach((hookName)=>{
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
            this.lifecycle[hookName] = lifecycle[hookName];
        });
        Object.keys(registerPlugins).forEach((pluginName)=>{
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
            this.applyPlugin(registerPlugins[pluginName]);
        });
    }
    constructor(lifecycle){
        this.registerPlugins = {};
        this.lifecycle = lifecycle;
        this.lifecycleKeys = Object.keys(lifecycle);
    }
}

function defaultPreloadArgs(preloadConfig) {
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        resourceCategory: 'sync',
        share: true,
        depsRemote: true,
        prefetchInterface: false
    }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
    return preloadArgs.map((args)=>{
        const remoteInfo = matchRemote(remotes, args.nameOrAlias);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.safeToString)({
            remoteInfo,
            remotes
        })}`);
        return {
            remote: remoteInfo,
            preloadConfig: defaultPreloadArgs(args)
        };
    });
}
function normalizePreloadExposes(exposes) {
    if (!exposes) {
        return [];
    }
    return exposes.map((expose)=>{
        if (expose === '.') {
            return expose;
        }
        if (expose.startsWith('./')) {
            return expose.replace('./', '');
        }
        return expose;
    });
}
function preloadAssets(remoteInfo, host, assets, // It is used to distinguish preload from load remote parallel loading
useLinkPreload = true) {
    const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
    if (host.options.inBrowser) {
        entryAssets.forEach((asset)=>{
            const { moduleInfo } = asset;
            const module = host.moduleCache.get(remoteInfo.name);
            if (module) {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: module.remoteEntryExports
                });
            } else {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: undefined
                });
            }
        });
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'style',
                crossorigin: 'anonymous'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: cssUrl,
                    cb: ()=>{},
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(cssEl);
            });
        } else {
            const defaultAttrs = {
                rel: 'stylesheet',
                type: 'text/css'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: cssUrl,
                    cb: ()=>{},
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteLink: false
                });
                needAttach && document.head.appendChild(cssEl);
            });
        }
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'script',
                crossorigin: 'anonymous'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { link: linkEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: jsUrl,
                    cb: ()=>{},
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(linkEl);
            });
        } else {
            const defaultAttrs = {
                fetchpriority: 'high',
                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { script: scriptEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createScript)({
                    url: jsUrl,
                    cb: ()=>{},
                    attrs: defaultAttrs,
                    createScriptHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createScript.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLScriptElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteScript: true
                });
                needAttach && document.head.appendChild(scriptEl);
            });
        }
    }
}

function assignRemoteInfo(remoteInfo, remoteSnapshot) {
    const remoteEntryInfo = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.l)(remoteSnapshot);
    if (!remoteEntryInfo.url) {
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f)(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
    }
    let entryUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(remoteSnapshot, remoteEntryInfo.url);
    if (!(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() && !entryUrl.startsWith('http')) {
        entryUrl = `https:${entryUrl}`;
    }
    remoteInfo.type = remoteEntryInfo.type;
    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
    remoteInfo.entry = entryUrl;
    remoteInfo.version = remoteSnapshot.version;
    remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
    return {
        name: 'snapshot-plugin',
        async afterResolve (args) {
            const { remote, pkgNameOrAlias, expose, origin, remoteInfo } = args;
            if (!(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.j)(remote) || !(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.k)(remote)) {
                const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo(remote);
                assignRemoteInfo(remoteInfo, remoteSnapshot);
                // preloading assets
                const preloadOptions = {
                    remote,
                    preloadConfig: {
                        nameOrAlias: pkgNameOrAlias,
                        exposes: [
                            expose
                        ],
                        resourceCategory: 'sync',
                        share: false,
                        depsRemote: false
                    }
                };
                const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                    origin,
                    preloadOptions,
                    remoteInfo,
                    remote,
                    remoteSnapshot,
                    globalSnapshot
                });
                if (assets) {
                    preloadAssets(remoteInfo, origin, assets, false);
                }
                return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, args, {
                    remoteSnapshot
                });
            }
            return args;
        }
    };
}

// name
// name:version
function splitId(id) {
    const splitInfo = id.split(':');
    if (splitInfo.length === 1) {
        return {
            name: splitInfo[0],
            version: undefined
        };
    } else if (splitInfo.length === 2) {
        return {
            name: splitInfo[0],
            version: splitInfo[1]
        };
    } else {
        return {
            name: splitInfo[1],
            version: splitInfo[2]
        };
    }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
    const id = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.e)(remoteInfo);
    const { value: snapshotValue } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.m)(globalSnapshot, id);
    const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
    if (effectiveRemoteSnapshot && !(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isManifestProvider)(effectiveRemoteSnapshot)) {
        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
        if (effectiveRemoteSnapshot.remotesInfo) {
            const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
            for (const key of remoteKeys){
                if (memo[key]) {
                    continue;
                }
                memo[key] = true;
                const subRemoteInfo = splitId(key);
                const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
                traverseModuleInfo(globalSnapshot, {
                    name: subRemoteInfo.name,
                    version: remoteValue.matchedVersion
                }, traverse, false, memo, undefined);
            }
        }
    }
}
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
    const cssAssets = [];
    const jsAssets = [];
    const entryAssets = [];
    const loadedSharedJsAssets = new Set();
    const loadedSharedCssAssets = new Set();
    const { options } = origin;
    const { preloadConfig: rootPreloadConfig } = preloadOptions;
    const { depsRemote } = rootPreloadConfig;
    const memo = {};
    traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot)=>{
        let preloadConfig;
        if (isRoot) {
            preloadConfig = rootPreloadConfig;
        } else {
            if (Array.isArray(depsRemote)) {
                // eslint-disable-next-line array-callback-return
                const findPreloadConfig = depsRemote.find((remoteConfig)=>{
                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
                        return true;
                    }
                    return false;
                });
                if (!findPreloadConfig) {
                    return;
                }
                preloadConfig = defaultPreloadArgs(findPreloadConfig);
            } else if (depsRemote === true) {
                preloadConfig = rootPreloadConfig;
            } else {
                return;
            }
        }
        const remoteEntryUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(moduleInfoSnapshot, (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.l)(moduleInfoSnapshot).url);
        if (remoteEntryUrl) {
            entryAssets.push({
                name: remoteInfo.name,
                moduleInfo: {
                    name: remoteInfo.name,
                    entry: remoteEntryUrl,
                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
                    shareScope: '',
                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
                },
                url: remoteEntryUrl
            });
        }
        let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
        const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
            var _moduleInfoSnapshot_modules;
            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo)=>{
                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
                    assets.push(moduleAssetInfo);
                }
                return assets;
            }, []);
        }
        function handleAssets(assets) {
            const assetsRes = assets.map((asset)=>(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(moduleInfoSnapshot, asset));
            if (preloadConfig.filter) {
                return assetsRes.filter(preloadConfig.filter);
            }
            return assetsRes;
        }
        if (moduleAssetsInfo) {
            const assetsLength = moduleAssetsInfo.length;
            for(let index = 0; index < assetsLength; index++){
                const assetsInfo = moduleAssetsInfo[index];
                const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
                    name: remoteInfo.name,
                    remoteSnapshot: moduleInfoSnapshot,
                    preloadConfig,
                    remote: remoteInfo,
                    origin
                });
                const preloaded = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.n)(exposeFullPath);
                if (preloaded) {
                    continue;
                }
                if (preloadConfig.resourceCategory === 'all') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                // eslint-disable-next-line no-constant-condition
                } else if (preloadConfig.resourceCategory = 'sync') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                }
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.s)(exposeFullPath);
            }
        }
    }, true, memo, remoteSnapshot);
    if (remoteSnapshot.shared) {
        const collectSharedAssets = (shareInfo, snapshotShared)=>{
            const registeredShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
            if (registeredShared && typeof registeredShared.lib === 'function') {
                snapshotShared.assets.js.sync.forEach((asset)=>{
                    loadedSharedJsAssets.add(asset);
                });
                snapshotShared.assets.css.sync.forEach((asset)=>{
                    loadedSharedCssAssets.add(asset);
                });
            }
        };
        remoteSnapshot.shared.forEach((shared)=>{
            var _options_shared;
            const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
            if (!shareInfos) {
                return;
            }
            // if no version, preload all shared
            const sharedOptions = shared.version ? shareInfos.find((s)=>s.version === shared.version) : shareInfos;
            if (!sharedOptions) {
                return;
            }
            const arrayShareInfo = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.p)(sharedOptions);
            arrayShareInfo.forEach((s)=>{
                collectSharedAssets(s, shared);
            });
        });
    }
    const needPreloadJsAssets = jsAssets.filter((asset)=>!loadedSharedJsAssets.has(asset));
    const needPreloadCssAssets = cssAssets.filter((asset)=>!loadedSharedCssAssets.has(asset));
    return {
        cssAssets: needPreloadCssAssets,
        jsAssetsWithoutEntry: needPreloadJsAssets,
        entryAssets
    };
}
const generatePreloadAssetsPlugin = function() {
    return {
        name: 'generate-preload-assets-plugin',
        async generatePreloadAssets (args) {
            const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
            if ((0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.j)(remote) && (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.k)(remote)) {
                return {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: [
                        {
                            name: remote.name,
                            url: remote.entry,
                            moduleInfo: {
                                name: remoteInfo.name,
                                entry: remote.entry,
                                type: 'global',
                                entryGlobalName: '',
                                shareScope: ''
                            }
                        }
                    ]
                };
            }
            assignRemoteInfo(remoteInfo, remoteSnapshot);
            const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
            return assets;
        }
    };
};

function getGlobalRemoteInfo(moduleInfo, origin) {
    const hostGlobalSnapshot = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.q)({
        name: origin.options.name,
        version: origin.options.version
    });
    // get remote detail info from global
    const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.m)(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
        return {
            hostGlobalSnapshot,
            globalSnapshot: (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.u)(),
            remoteSnapshot: (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.q)({
                name: moduleInfo.name,
                version: globalRemoteInfo.matchedVersion
            })
        };
    }
    return {
        hostGlobalSnapshot: undefined,
        globalSnapshot: (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.u)(),
        remoteSnapshot: (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.q)({
            name: moduleInfo.name,
            version: 'version' in moduleInfo ? moduleInfo.version : undefined
        })
    };
}
class SnapshotHandler {
    async loadSnapshot(moduleInfo) {
        const { options } = this.HostInstance;
        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
            options,
            moduleInfo,
            hostGlobalSnapshot,
            remoteSnapshot,
            globalSnapshot
        });
        return {
            remoteSnapshot: globalRemoteSnapshot,
            globalSnapshot: globalSnapshotRes
        };
    }
    // eslint-disable-next-line max-lines-per-function
    async loadRemoteSnapshotInfo(moduleInfo) {
        const { options } = this.HostInstance;
        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options,
            moduleInfo
        });
        let hostSnapshot = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.q)({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version
        });
        if (!hostSnapshot) {
            hostSnapshot = {
                version: this.HostInstance.options.version || '',
                remoteEntry: '',
                remotesInfo: {}
            };
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.r)({
                [this.HostInstance.options.name]: hostSnapshot
            });
        }
        // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
        // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
        if (hostSnapshot && 'remotesInfo' in hostSnapshot && !(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.m)(hostSnapshot.remotesInfo, moduleInfo.name).value) {
            if ('version' in moduleInfo || 'entry' in moduleInfo) {
                hostSnapshot.remotesInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
                    [moduleInfo.name]: {
                        matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
                    }
                });
            }
        }
        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
            options,
            moduleInfo,
            hostGlobalSnapshot,
            remoteSnapshot,
            globalSnapshot
        });
        // global snapshot includes manifest or module info includes manifest
        if (globalRemoteSnapshot) {
            if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isManifestProvider)(globalRemoteSnapshot)) {
                const remoteEntry = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
                const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, moduleInfo, {
                    // The global remote may be overridden
                    // Therefore, set the snapshot key to the global address of the actual request
                    entry: remoteEntry
                }), moduleSnapshot);
                return {
                    remoteSnapshot: moduleSnapshot,
                    globalSnapshot: globalSnapshotRes
                };
            } else {
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: globalRemoteSnapshot,
                    from: 'global'
                });
                return {
                    remoteSnapshot: remoteSnapshotRes,
                    globalSnapshot: globalSnapshotRes
                };
            }
        } else {
            if ((0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.j)(moduleInfo)) {
                // get from manifest.json and merge remote info from remote server
                const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.t)(moduleInfo, moduleSnapshot);
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: moduleSnapshot,
                    from: 'global'
                });
                return {
                    remoteSnapshot: remoteSnapshotRes,
                    globalSnapshot: globalSnapshotRes
                };
            } else {
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f)(`
          Cannot get remoteSnapshot with the name: '${moduleInfo.name}', version: '${moduleInfo.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:\n
          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.\n
          2. The remote '${moduleInfo.name}' version '${moduleInfo.version}' is not released.\n
          The transformed module info: ${JSON.stringify(globalSnapshotRes)}
        `);
            }
        }
    }
    getGlobalRemoteInfo(moduleInfo) {
        return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
    }
    async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
        const getManifest = async ()=>{
            let manifestJson = this.manifestCache.get(manifestUrl);
            if (manifestJson) {
                return manifestJson;
            }
            try {
                let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
                if (!res || !(res instanceof Response)) {
                    res = await fetch(manifestUrl, {});
                }
                manifestJson = await res.json();
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
                this.manifestCache.set(manifestUrl, manifestJson);
                return manifestJson;
            } catch (err) {
                delete this.manifestLoading[manifestUrl];
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.f)(`Failed to get manifestJson for ${moduleInfo.name}. The manifest URL is ${manifestUrl}. Please ensure that the manifestUrl is accessible.
          \n Error message:
          \n ${err}`);
            }
        };
        const asyncLoadProcess = async ()=>{
            const manifestJson = await getManifest();
            const remoteSnapshot = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.generateSnapshotFromManifest)(manifestJson, {
                version: manifestUrl
            });
            const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo,
                manifestJson,
                remoteSnapshot,
                manifestUrl,
                from: 'manifest'
            });
            return remoteSnapshotRes;
        };
        if (!this.manifestLoading[manifestUrl]) {
            this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res)=>res);
        }
        return this.manifestLoading[manifestUrl];
    }
    constructor(HostInstance){
        this.loadingHostSnapshot = null;
        this.manifestCache = new Map();
        this.hooks = new PluginSystem({
            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot')
        });
        this.manifestLoading = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.G.__FEDERATION__.__MANIFEST_LOADING__;
        this.HostInstance = HostInstance;
        this.loaderHook = HostInstance.loaderHook;
    }
}

class SharedHandler {
    // register shared in shareScopeMap
    registerShared(globalOptions, userOptions) {
        const { shareInfos, shared } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.v)(globalOptions, userOptions);
        const sharedKeys = Object.keys(shareInfos);
        sharedKeys.forEach((sharedKey)=>{
            const sharedVals = shareInfos[sharedKey];
            sharedVals.forEach((sharedVal)=>{
                const registeredShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
                if (!registeredShared && sharedVal && sharedVal.lib) {
                    this.setShared({
                        pkgName: sharedKey,
                        lib: sharedVal.lib,
                        get: sharedVal.get,
                        loaded: true,
                        shared: sharedVal,
                        from: userOptions.name
                    });
                }
            });
        });
        return {
            shareInfos,
            shared
        };
    }
    async loadShare(pkgName, extraOptions) {
        const { host } = this;
        // This function performs the following steps:
        // 1. Checks if the currently loaded share already exists, if not, it throws an error
        // 2. Searches globally for a matching share, if found, it uses it directly
        // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
        const shareInfo = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.x)({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareInfo == null ? void 0 : shareInfo.scope) {
            await Promise.all(shareInfo.scope.map(async (shareScope)=>{
                await Promise.all(this.initializeSharing(shareScope, {
                    strategy: shareInfo.strategy
                }));
                return;
            }));
        }
        const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName,
            shareInfo,
            shared: host.options.shared,
            origin: host
        });
        const { shareInfo: shareInfoRes } = loadShareRes;
        // Assert that shareInfoRes exists, if not, throw an error
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
        // Retrieve from cache
        const registeredShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.z)(shared.useIn, host.options.name);
        };
        if (registeredShared && registeredShared.lib) {
            addUseIn(registeredShared);
            return registeredShared.lib;
        } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
            const factory = await registeredShared.loading;
            registeredShared.loaded = true;
            if (!registeredShared.lib) {
                registeredShared.lib = factory;
            }
            addUseIn(registeredShared);
            return factory;
        } else if (registeredShared) {
            const asyncLoadProcess = async ()=>{
                const factory = await registeredShared.get();
                shareInfoRes.lib = factory;
                shareInfoRes.loaded = true;
                addUseIn(shareInfoRes);
                const gShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
                if (gShared) {
                    gShared.lib = factory;
                    gShared.loaded = true;
                }
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: registeredShared,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        } else {
            if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
                return false;
            }
            const asyncLoadProcess = async ()=>{
                const factory = await shareInfoRes.get();
                shareInfoRes.lib = factory;
                shareInfoRes.loaded = true;
                addUseIn(shareInfoRes);
                const gShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
                if (gShared) {
                    gShared.lib = factory;
                    gShared.loaded = true;
                }
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: shareInfoRes,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        }
    }
    /**
   * This function initializes the sharing sequence (executed only once per share scope).
   * It accepts one argument, the name of the share scope.
   * If the share scope does not exist, it creates one.
   */ // eslint-disable-next-line @typescript-eslint/member-ordering
    initializeSharing(shareScopeName = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.b, extraOptions) {
        const { host } = this;
        const from = extraOptions == null ? void 0 : extraOptions.from;
        const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
        let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
        const promises = [];
        if (from !== 'build') {
            const { initTokens } = this;
            if (!initScope) initScope = [];
            let initToken = initTokens[shareScopeName];
            if (!initToken) initToken = initTokens[shareScopeName] = {
                from: this.host.name
            };
            if (initScope.indexOf(initToken) >= 0) return promises;
            initScope.push(initToken);
        }
        const shareScope = this.shareScopeMap;
        const hostName = host.options.name;
        // Creates a new share scope if necessary
        if (!shareScope[shareScopeName]) {
            shareScope[shareScopeName] = {};
        }
        // Executes all initialization snippets from all accessible modules
        const scope = shareScope[shareScopeName];
        const register = (name, shared)=>{
            var _activeVersion_shareConfig;
            const { version, eager } = shared;
            scope[name] = scope[name] || {};
            const versions = scope[name];
            const activeVersion = versions[version];
            const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
            if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
                versions[version] = shared;
            }
        };
        const initFn = (mod)=>mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
        const initRemoteModule = async (key)=>{
            const { module } = await host.remoteHandler.getRemoteModuleAndOptions({
                id: key
            });
            if (module.getEntry) {
                const entry = await module.getEntry();
                if (!module.inited) {
                    await initFn(entry);
                    module.inited = true;
                }
            }
        };
        Object.keys(host.options.shared).forEach((shareName)=>{
            const sharedArr = host.options.shared[shareName];
            sharedArr.forEach((shared)=>{
                if (shared.scope.includes(shareScopeName)) {
                    register(shareName, shared);
                }
            });
        });
        // TODO: strategy==='version-first' need to be removed in the future
        if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
            host.options.remotes.forEach((remote)=>{
                if (remote.shareScope === shareScopeName) {
                    promises.push(initRemoteModule(remote.name));
                }
            });
        }
        return promises;
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        const { host } = this;
        const shareInfo = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.x)({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareInfo == null ? void 0 : shareInfo.scope) {
            shareInfo.scope.forEach((shareScope)=>{
                this.initializeSharing(shareScope, {
                    strategy: shareInfo.strategy
                });
            });
        }
        const registeredShared = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.z)(shared.useIn, host.options.name);
        };
        if (registeredShared) {
            if (typeof registeredShared.lib === 'function') {
                addUseIn(registeredShared);
                if (!registeredShared.loaded) {
                    registeredShared.loaded = true;
                    if (registeredShared.from === host.options.name) {
                        shareInfo.loaded = true;
                    }
                }
                return registeredShared.lib;
            }
            if (typeof registeredShared.get === 'function') {
                const module = registeredShared.get();
                if (!(module instanceof Promise)) {
                    addUseIn(registeredShared);
                    this.setShared({
                        pkgName,
                        loaded: true,
                        from: host.options.name,
                        lib: module,
                        shared: registeredShared
                    });
                    return module;
                }
            }
        }
        if (shareInfo.lib) {
            if (!shareInfo.loaded) {
                shareInfo.loaded = true;
            }
            return shareInfo.lib;
        }
        if (shareInfo.get) {
            const module = shareInfo.get();
            if (module instanceof Promise) {
                throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.
        Possible reasons for failure: \n
        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n
        2. The ${pkgName} share was not registered with the 'lib' attribute.\n
      `);
            }
            shareInfo.lib = module;
            this.setShared({
                pkgName,
                loaded: true,
                from: host.options.name,
                lib: shareInfo.lib,
                shared: shareInfo
            });
            return shareInfo.lib;
        }
        throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.
        Possible reasons for failure: \n
        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n
        2. The ${pkgName} share was not registered with the 'lib' attribute.\n
      `);
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        const { host } = this;
        this.shareScopeMap[scopeName] = shareScope;
        this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope,
            options: host.options,
            origin: host,
            scopeName,
            hostShareScopeMap: extraOptions.hostShareScopeMap
        });
    }
    setShared({ pkgName, shared, from, lib, loading, loaded, get }) {
        const { version, scope = 'default' } = shared, shareInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(shared, [
            "version",
            "scope"
        ]);
        const scopes = Array.isArray(scope) ? scope : [
            scope
        ];
        scopes.forEach((sc)=>{
            if (!this.shareScopeMap[sc]) {
                this.shareScopeMap[sc] = {};
            }
            if (!this.shareScopeMap[sc][pkgName]) {
                this.shareScopeMap[sc][pkgName] = {};
            }
            if (!this.shareScopeMap[sc][pkgName][version]) {
                this.shareScopeMap[sc][pkgName][version] = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
                    version,
                    scope: [
                        'default'
                    ]
                }, shareInfo, {
                    lib,
                    loaded,
                    loading
                });
                if (get) {
                    this.shareScopeMap[sc][pkgName][version].get = get;
                }
                return;
            }
            const registeredShared = this.shareScopeMap[sc][pkgName][version];
            if (loading && !registeredShared.loading) {
                registeredShared.loading = loading;
            }
        });
    }
    _setGlobalShareScopeMap(hostOptions) {
        const globalShareScopeMap = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.y)();
        const identifier = hostOptions.id || hostOptions.name;
        if (identifier && !globalShareScopeMap[identifier]) {
            globalShareScopeMap[identifier] = this.shareScopeMap;
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            afterResolve: new AsyncWaterfallHook('afterResolve'),
            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
            // not used yet
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook('resolveShare'),
            // maybe will change, temporarily for internal use only
            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
        });
        this.host = host;
        this.shareScopeMap = {};
        this.initTokens = {};
        this._setGlobalShareScopeMap(host.options);
    }
}

class RemoteHandler {
    formatAndRegisterRemote(globalOptions, userOptions) {
        const userRemotes = userOptions.remotes || [];
        return userRemotes.reduce((res, remote)=>{
            this.registerRemote(remote, res, {
                force: false
            });
            return res;
        }, globalOptions.remotes);
    }
    setIdToRemoteMap(id, remoteMatchInfo) {
        const { remote, expose } = remoteMatchInfo;
        const { name, alias } = remote;
        this.idToRemoteMap[id] = {
            name: remote.name,
            expose
        };
        if (alias && id.startsWith(name)) {
            const idWithAlias = id.replace(name, alias);
            this.idToRemoteMap[idWithAlias] = {
                name: remote.name,
                expose
            };
            return;
        }
        if (alias && id.startsWith(alias)) {
            const idWithName = id.replace(alias, name);
            this.idToRemoteMap[idWithName] = {
                name: remote.name,
                expose
            };
        }
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        const { host } = this;
        try {
            const { loadFactory = true } = options || {
                loadFactory: true
            };
            // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
            // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
            // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
            // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
            // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
            // id: alias(app1) + expose(button) = app1/button
            // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
            const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({
                id
            });
            const { pkgNameOrAlias, remote, expose, id: idRes } = remoteMatchInfo;
            const moduleOrFactory = await module.get(idRes, expose, options);
            const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
                id: idRes,
                pkgNameOrAlias,
                expose,
                exposeModule: loadFactory ? moduleOrFactory : undefined,
                exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
                remote,
                options: moduleOptions,
                moduleInstance: module,
                origin: host
            });
            this.setIdToRemoteMap(id, remoteMatchInfo);
            if (typeof moduleWrapper === 'function') {
                return moduleWrapper;
            }
            return moduleOrFactory;
        } catch (error) {
            const { from = 'runtime' } = options || {
                from: 'runtime'
            };
            const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                error,
                from,
                lifecycle: 'onLoad',
                origin: host
            });
            if (!failOver) {
                throw error;
            }
            return failOver;
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        const { host } = this;
        await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: preloadOptions,
            options: host.options,
            origin: host
        });
        const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
        await Promise.all(preloadOps.map(async (ops)=>{
            const { remote } = ops;
            const remoteInfo = getRemoteInfo(remote);
            const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo(remote);
            const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: host,
                preloadOptions: ops,
                remote,
                remoteInfo,
                globalSnapshot,
                remoteSnapshot
            });
            if (!assets) {
                return;
            }
            preloadAssets(remoteInfo, host, assets);
        }));
    }
    registerRemotes(remotes, options) {
        const { host } = this;
        remotes.forEach((remote)=>{
            this.registerRemote(remote, host.options.remotes, {
                force: options == null ? void 0 : options.force
            });
        });
    }
    async getRemoteModuleAndOptions(options) {
        const { host } = this;
        const { id } = options;
        let loadRemoteArgs;
        try {
            loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
                id,
                options: host.options,
                origin: host
            });
        } catch (error) {
            loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                options: host.options,
                origin: host,
                from: 'runtime',
                error,
                lifecycle: 'beforeRequest'
            });
            if (!loadRemoteArgs) {
                throw error;
            }
        }
        const { id: idRes } = loadRemoteArgs;
        const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(remoteSplitInfo, `
        Unable to locate ${idRes} in ${host.options.name}. Potential reasons for failure include:\n
        1. ${idRes} was not included in the 'remotes' parameter of ${host.options.name || 'the host'}.\n
        2. ${idRes} could not be found in the 'remotes' of ${host.options.name} with either 'name' or 'alias' attributes.
        3. ${idRes} is not online, injected, or loaded.
        4. ${idRes}  cannot be accessed on the expected.
        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${idRes}.
      `);
        const { remote: rawRemote } = remoteSplitInfo;
        const remoteInfo = getRemoteInfo(rawRemote);
        const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
            id: idRes
        }, remoteSplitInfo, {
            options: host.options,
            origin: host,
            remoteInfo
        }));
        const { remote, expose } = matchInfo;
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
        let module = host.moduleCache.get(remote.name);
        const moduleOptions = {
            host: host,
            remoteInfo
        };
        if (!module) {
            module = new Module(moduleOptions);
            host.moduleCache.set(remote.name, module);
        }
        return {
            module,
            moduleOptions,
            remoteMatchInfo: matchInfo
        };
    }
    registerRemote(remote, targetRemotes, options) {
        const { host } = this;
        const normalizeRemote = ()=>{
            if (remote.alias) {
                // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
                // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
                const findEqual = targetRemotes.find((item)=>{
                    var _item_alias;
                    return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
                });
                (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
            }
            // Set the remote entry to a complete path
            if ('entry' in remote) {
                if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() && !remote.entry.startsWith('http')) {
                    remote.entry = new URL(remote.entry, window.location.origin).href;
                }
            }
            if (!remote.shareScope) {
                remote.shareScope = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.b;
            }
            if (!remote.type) {
                remote.type = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.D;
            }
        };
        this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote,
            origin: host
        });
        const registeredRemote = targetRemotes.find((item)=>item.name === remote.name);
        if (!registeredRemote) {
            normalizeRemote();
            targetRemotes.push(remote);
            this.hooks.lifecycle.registerRemote.emit({
                remote,
                origin: host
            });
        } else {
            const messages = [
                `The remote "${remote.name}" is already registered.`,
                (options == null ? void 0 : options.force) ? 'Hope you have known that OVERRIDE it may have some unexpected errors' : 'If you want to merge the remote, you can set "force: true".'
            ];
            if (options == null ? void 0 : options.force) {
                // remove registered remote
                this.removeRemote(registeredRemote);
                normalizeRemote();
                targetRemotes.push(remote);
                this.hooks.lifecycle.registerRemote.emit({
                    remote,
                    origin: host
                });
            }
            (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.warn)(messages.join(' '));
        }
    }
    removeRemote(remote) {
        try {
            const { host } = this;
            const { name } = remote;
            const remoteIndex = host.options.remotes.findIndex((item)=>item.name === name);
            if (remoteIndex !== -1) {
                host.options.remotes.splice(remoteIndex, 1);
            }
            const loadedModule = host.moduleCache.get(remote.name);
            if (loadedModule) {
                const remoteInfo = loadedModule.remoteInfo;
                const key = remoteInfo.entryGlobalName;
                if (globalThis[key]) {
                    var _Object_getOwnPropertyDescriptor;
                    if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(globalThis, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
                        delete globalThis[key];
                    } else {
                        // @ts-ignore
                        globalThis[key] = undefined;
                    }
                }
                const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
                if (_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[remoteEntryUniqueKey]) {
                    delete _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.a[remoteEntryUniqueKey];
                }
                host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
                // delete unloaded shared and instance
                let remoteInsId = remoteInfo.buildVersion ? (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.composeKeyWithSeparator)(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
                const remoteInsIndex = globalThis.__FEDERATION__.__INSTANCES__.findIndex((ins)=>{
                    if (remoteInfo.buildVersion) {
                        return ins.options.id === remoteInsId;
                    } else {
                        return ins.name === remoteInsId;
                    }
                });
                if (remoteInsIndex !== -1) {
                    const remoteIns = globalThis.__FEDERATION__.__INSTANCES__[remoteInsIndex];
                    remoteInsId = remoteIns.options.id || remoteInsId;
                    const globalShareScopeMap = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.y)();
                    let isAllSharedNotUsed = true;
                    const needDeleteKeys = [];
                    Object.keys(globalShareScopeMap).forEach((instId)=>{
                        const shareScopeMap = globalShareScopeMap[instId];
                        shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope)=>{
                            const shareScopeVal = shareScopeMap[shareScope];
                            shareScopeVal && Object.keys(shareScopeVal).forEach((shareName)=>{
                                const sharedPkgs = shareScopeVal[shareName];
                                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion)=>{
                                    const shared = sharedPkgs[shareVersion];
                                    if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
                                        if (shared.loaded || shared.loading) {
                                            shared.useIn = shared.useIn.filter((usedHostName)=>usedHostName !== remoteInfo.name);
                                            if (shared.useIn.length) {
                                                isAllSharedNotUsed = false;
                                            } else {
                                                needDeleteKeys.push([
                                                    instId,
                                                    shareScope,
                                                    shareName,
                                                    shareVersion
                                                ]);
                                            }
                                        } else {
                                            needDeleteKeys.push([
                                                instId,
                                                shareScope,
                                                shareName,
                                                shareVersion
                                            ]);
                                        }
                                    }
                                });
                            });
                        });
                    });
                    if (isAllSharedNotUsed) {
                        remoteIns.shareScopeMap = {};
                        delete globalShareScopeMap[remoteInsId];
                    }
                    needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion])=>{
                        var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
                        (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
                    });
                    globalThis.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
                }
                const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);
                if (hostGlobalSnapshot) {
                    const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.m)(hostGlobalSnapshot.remotesInfo, remote.name).key;
                    if (remoteKey) {
                        delete hostGlobalSnapshot.remotesInfo[remoteKey];
                        if (//eslint-disable-next-line no-extra-boolean-cast
                        Boolean(_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.G.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
                            delete _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.G.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
                        }
                    }
                }
                host.moduleCache.delete(remote.name);
            }
        } catch (err) {
            console.log('removeRemote fail: ', err);
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
            registerRemote: new SyncWaterfallHook('registerRemote'),
            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
            onLoad: new AsyncHook('onLoad'),
            handlePreloadModule: new SyncHook('handlePreloadModule'),
            errorLoadRemote: new AsyncHook('errorLoadRemote'),
            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
            // not used yet
            afterPreloadRemote: new AsyncHook(),
            loadEntry: new AsyncHook()
        });
        this.host = host;
        this.idToRemoteMap = {};
    }
}

class FederationHost {
    initOptions(userOptions) {
        this.registerPlugins(userOptions.plugins);
        const options = this.formatOptions(this.options, userOptions);
        this.options = options;
        return options;
    }
    async loadShare(pkgName, extraOptions) {
        return this.sharedHandler.loadShare(pkgName, extraOptions);
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        return this.sharedHandler.loadShareSync(pkgName, extraOptions);
    }
    initializeSharing(shareScopeName = _share_esm_js__WEBPACK_IMPORTED_MODULE_2__.b, extraOptions) {
        return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
    }
    initRawContainer(name, url, container) {
        const remoteInfo = getRemoteInfo({
            name,
            entry: url
        });
        const module = new Module({
            host: this,
            remoteInfo
        });
        module.remoteEntryExports = container;
        this.moduleCache.set(name, module);
        return module;
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        return this.remoteHandler.loadRemote(id, options);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        return this.remoteHandler.preloadRemote(preloadOptions);
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
    }
    formatOptions(globalOptions, userOptions) {
        const { shared } = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.v)(globalOptions, userOptions);
        const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
            origin: this,
            userOptions,
            options: globalOptions,
            shareInfo: shared
        });
        const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
        const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
        const plugins = [
            ...globalOptionsRes.plugins
        ];
        if (userOptionsRes.plugins) {
            userOptionsRes.plugins.forEach((plugin)=>{
                if (!plugins.includes(plugin)) {
                    plugins.push(plugin);
                }
            });
        }
        const optionsRes = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, globalOptions, userOptions, {
            plugins,
            remotes,
            shared: handledShared
        });
        this.hooks.lifecycle.init.emit({
            origin: this,
            options: optionsRes
        });
        return optionsRes;
    }
    registerPlugins(plugins) {
        const pluginRes = registerPlugins$1(plugins, [
            this.hooks,
            this.remoteHandler.hooks,
            this.sharedHandler.hooks,
            this.snapshotHandler.hooks,
            this.loaderHook
        ]);
        // Merge plugin
        this.options.plugins = this.options.plugins.reduce((res, plugin)=>{
            if (!plugin) return res;
            if (res && !res.find((item)=>item.name === plugin.name)) {
                res.push(plugin);
            }
            return res;
        }, pluginRes || []);
    }
    registerRemotes(remotes, options) {
        return this.remoteHandler.registerRemotes(remotes, options);
    }
    constructor(userOptions){
        this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook('beforeInit'),
            init: new SyncHook(),
            // maybe will change, temporarily for internal use only
            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
            // maybe will change, temporarily for internal use only
            initContainer: new AsyncWaterfallHook('initContainer')
        });
        this.version = "0.6.4";
        this.moduleCache = new Map();
        this.loaderHook = new PluginSystem({
            // FIXME: may not be suitable , not open to the public yet
            getModuleInfo: new SyncHook(),
            createScript: new SyncHook(),
            createLink: new SyncHook(),
            // only work for manifest , so not open to the public yet
            fetch: new AsyncHook()
        });
        // TODO: Validate the details of the options
        // Initialize options with default values
        const defaultOptions = {
            id: (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.A)(),
            name: userOptions.name,
            plugins: [
                snapshotPlugin(),
                generatePreloadAssetsPlugin()
            ],
            remotes: [],
            shared: {},
            inBrowser: (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)()
        };
        this.name = userOptions.name;
        this.options = defaultOptions;
        this.snapshotHandler = new SnapshotHandler(this);
        this.sharedHandler = new SharedHandler(this);
        this.remoteHandler = new RemoteHandler(this);
        this.shareScopeMap = this.sharedHandler.shareScopeMap;
        this.registerPlugins([
            ...defaultOptions.plugins,
            ...userOptions.plugins || []
        ]);
        this.options = this.formatOptions(defaultOptions, userOptions);
    }
}

let FederationInstance = null;
function init(options) {
    // Retrieve the same instance with the same name
    const instance = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.C)(options.name, options.version);
    if (!instance) {
        // Retrieve debug constructor
        const FederationConstructor = (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.E)() || FederationHost;
        FederationInstance = new FederationConstructor(options);
        (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.F)(FederationInstance);
        return FederationInstance;
    } else {
        // Merge options
        instance.initOptions(options);
        if (!FederationInstance) {
            FederationInstance = instance;
        }
        return instance;
    }
}
function loadRemote(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    const loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    const loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    const loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
    (0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.d)(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
// Inject for debug
(0,_share_esm_js__WEBPACK_IMPORTED_MODULE_2__.B)(FederationHost);




/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(/*! next/dist/compiled/process */ "./node_modules/next/dist/compiled/process/browser.js");

//# sourceMappingURL=process.js.map

/***/ }),

/***/ "./node_modules/@module-federation/runtime/dist/polyfills.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/polyfills.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _extends; },
/* harmony export */   a: function() { return /* binding */ _object_without_properties_loose; }
/* harmony export */ });
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




/***/ }),

/***/ "./node_modules/@module-federation/runtime/dist/share.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/share.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ getBuilderId; },
/* harmony export */   B: function() { return /* binding */ setGlobalFederationConstructor; },
/* harmony export */   C: function() { return /* binding */ getGlobalFederationInstance; },
/* harmony export */   D: function() { return /* binding */ DEFAULT_REMOTE_TYPE; },
/* harmony export */   E: function() { return /* binding */ getGlobalFederationConstructor; },
/* harmony export */   F: function() { return /* binding */ setGlobalFederationInstance; },
/* harmony export */   G: function() { return /* binding */ Global; },
/* harmony export */   H: function() { return /* binding */ registerGlobalPlugins; },
/* harmony export */   I: function() { return /* binding */ nativeGlobal; },
/* harmony export */   J: function() { return /* binding */ resetFederationGlobalInfo; },
/* harmony export */   K: function() { return /* binding */ getTargetSnapshotInfoByModuleInfo; },
/* harmony export */   a: function() { return /* binding */ globalLoading; },
/* harmony export */   b: function() { return /* binding */ DEFAULT_SCOPE; },
/* harmony export */   c: function() { return /* binding */ getRemoteEntryExports; },
/* harmony export */   d: function() { return /* binding */ assert; },
/* harmony export */   e: function() { return /* binding */ getFMId; },
/* harmony export */   f: function() { return /* binding */ error; },
/* harmony export */   g: function() { return /* binding */ getGlobalHostPlugins; },
/* harmony export */   h: function() { return /* binding */ isPlainObject; },
/* harmony export */   i: function() { return /* binding */ isObject; },
/* harmony export */   j: function() { return /* binding */ isRemoteInfoWithEntry; },
/* harmony export */   k: function() { return /* binding */ isPureRemoteEntry; },
/* harmony export */   l: function() { return /* binding */ getRemoteEntryInfoFromSnapshot; },
/* harmony export */   m: function() { return /* binding */ getInfoWithoutType; },
/* harmony export */   n: function() { return /* binding */ getPreloaded; },
/* harmony export */   o: function() { return /* binding */ getRegisteredShare; },
/* harmony export */   p: function() { return /* binding */ arrayOptions; },
/* harmony export */   q: function() { return /* binding */ getGlobalSnapshotInfoByModuleInfo; },
/* harmony export */   r: function() { return /* binding */ addGlobalSnapshot; },
/* harmony export */   s: function() { return /* binding */ setPreloaded; },
/* harmony export */   t: function() { return /* binding */ setGlobalSnapshotInfoByModuleInfo; },
/* harmony export */   u: function() { return /* binding */ getGlobalSnapshot; },
/* harmony export */   v: function() { return /* binding */ formatShareConfigs; },
/* harmony export */   w: function() { return /* binding */ warn; },
/* harmony export */   x: function() { return /* binding */ getTargetSharedOptions; },
/* harmony export */   y: function() { return /* binding */ getGlobalShareScope; },
/* harmony export */   z: function() { return /* binding */ addUniqueItem; }
/* harmony export */ });
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.esm.js */ "./node_modules/@module-federation/runtime/dist/polyfills.esm.js");
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");



function getBuilderId() {
    //@ts-ignore
    return  true ? "host:0.1.0" : 0;
}

const LOG_CATEGORY = '[ Federation Runtime ]';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
    if (!condition) {
        error(msg);
    }
}
function error(msg) {
    if (msg instanceof Error) {
        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        throw msg;
    }
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
    if (msg instanceof Error) {
        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        console.warn(msg);
    } else {
        console.warn(`${LOG_CATEGORY}: ${msg}`);
    }
}

function addUniqueItem(arr, item) {
    if (arr.findIndex((name)=>name === item) === -1) {
        arr.push(item);
    }
    return arr;
}
function getFMId(remoteInfo) {
    if ('version' in remoteInfo && remoteInfo.version) {
        return `${remoteInfo.name}:${remoteInfo.version}`;
    } else if ('entry' in remoteInfo && remoteInfo.entry) {
        return `${remoteInfo.name}:${remoteInfo.entry}`;
    } else {
        return `${remoteInfo.name}`;
    }
}
function isRemoteInfoWithEntry(remote) {
    return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
    return !remote.entry.includes('.json') && remote.entry.includes('.js');
}
function isObject(val) {
    return val && typeof val === 'object';
}
const objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
    return objectToString.call(val) === '[object Object]';
}
function arrayOptions(options) {
    return Array.isArray(options) ? options : [
        options
    ];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
    const defaultRemoteEntryInfo = {
        url: '',
        type: 'global',
        globalName: ''
    };
    if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)()) {
        return 'remoteEntry' in snapshot ? {
            url: snapshot.remoteEntry,
            type: snapshot.remoteEntryType,
            globalName: snapshot.globalName
        } : defaultRemoteEntryInfo;
    }
    if ('ssrRemoteEntry' in snapshot) {
        return {
            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
            globalName: snapshot.globalName
        };
    }
    return defaultRemoteEntryInfo;
}

const nativeGlobal = (()=>{
    try {
        return new Function('return this')();
    } catch (e) {
        return globalThis;
    }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
    Object.defineProperty(target, key, {
        value: val,
        configurable: false,
        writable: true
    });
}
function includeOwnProperty(target, key) {
    return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
    definePropertyGlobalVal(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
const globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
    }
    if (!includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map()
        });
        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
    }
    var ___GLOBAL_PLUGIN__;
    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
    var ___INSTANCES__;
    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
    var _moduleInfo;
    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
    var ___SHARE__;
    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
    var ___MANIFEST_LOADING__;
    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
    var ___PRELOADED_MAP__;
    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
}
setGlobalDefaultVal(globalThis);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
    globalThis.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
    globalThis.__FEDERATION__.__INSTANCES__ = [];
    globalThis.__FEDERATION__.moduleInfo = {};
    globalThis.__FEDERATION__.__SHARE__ = {};
    globalThis.__FEDERATION__.__MANIFEST_LOADING__ = {};
}
function getGlobalFederationInstance(name, version) {
    const buildId = getBuilderId();
    return globalThis.__FEDERATION__.__INSTANCES__.find((GMInstance)=>{
        if (buildId && GMInstance.options.id === getBuilderId()) {
            return true;
        }
        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
            return true;
        }
        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
            return true;
        }
        return false;
    });
}
function setGlobalFederationInstance(FederationInstance) {
    globalThis.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
    return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isDebugMode)()) {
    if (isDebug) {
        globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
        globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.6.4";
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
    if (typeof key === 'string') {
        const keyRes = target[key];
        if (keyRes) {
            return {
                value: target[key],
                key: key
            };
        } else {
            const targetKeys = Object.keys(target);
            for (const targetKey of targetKeys){
                const [targetTypeOrName, _] = targetKey.split(':');
                const nKey = `${targetTypeOrName}:${key}`;
                const typeWithKeyRes = target[nKey];
                if (typeWithKeyRes) {
                    return {
                        value: typeWithKeyRes,
                        key: nKey
                    };
                }
            }
            return {
                value: undefined,
                key: key
            };
        }
    } else {
        throw new Error('key must be string');
    }
}
const getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot)=>{
    // Check if the remote is included in the hostSnapshot
    const moduleKey = getFMId(moduleInfo);
    const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
    // The remoteSnapshot might not include a version
    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
        getModuleInfo.version = moduleInfo['version'];
    }
    if (getModuleInfo) {
        return getModuleInfo;
    }
    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
    if ('version' in moduleInfo && moduleInfo['version']) {
        const { version } = moduleInfo, resModuleInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(moduleInfo, [
            "version"
        ]);
        const moduleKeyWithoutVersion = getFMId(resModuleInfo);
        const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
            return getModuleInfoWithoutVersion;
        }
    }
    return;
};
const getGlobalSnapshotInfoByModuleInfo = (moduleInfo)=>getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo)=>{
    const moduleKey = getFMId(remoteInfo);
    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
    return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = (moduleInfos)=>{
    nativeGlobal.__FEDERATION__.moduleInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
    return ()=>{
        const keys = Object.keys(moduleInfos);
        for (const key of keys){
            delete nativeGlobal.__FEDERATION__.moduleInfo[key];
        }
    };
};
const getRemoteEntryExports = (name, globalName)=>{
    const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
    const entryExports = globalThis[remoteEntryKey];
    return {
        remoteEntryKey,
        entryExports
    };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
const registerGlobalPlugins = (plugins)=>{
    const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
    plugins.forEach((plugin)=>{
        if (__GLOBAL_PLUGIN__.findIndex((p)=>p.name === plugin.name) === -1) {
            __GLOBAL_PLUGIN__.push(plugin);
        } else {
            warn(`The plugin ${plugin.name} has been registered.`);
        }
    });
};
const getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = (id)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = (id)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.set(id, true);

const DEFAULT_SCOPE = 'default';
const DEFAULT_REMOTE_TYPE = 'global';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
const buildIdentifier = '[0-9A-Za-z-]+';
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = '0|[1-9]\\d*';
const numericIdentifierLoose = '[0-9]+';
const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = '((?:<|>)?=?)';
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = '(?:~>?)';
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = '(?:\\^)';
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = '(<|>)?=?\\s*\\*';
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
// copy from semver package
const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
function parseRegex(source) {
    return new RegExp(source);
}
function isXVersion(version) {
    return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe(...fns) {
    return (x)=>fns.reduce((v, f)=>f(v), x);
}
function extractComparator(comparatorString) {
    return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
    const mainVersion = `${major}.${minor}.${patch}`;
    if (preRelease) {
        return `${mainVersion}-${preRelease}`;
    }
    return mainVersion;
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
function parseHyphen(range) {
    return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{
        if (isXVersion(fromMajor)) {
            from = '';
        } else if (isXVersion(fromMinor)) {
            from = `>=${fromMajor}.0.0`;
        } else if (isXVersion(fromPatch)) {
            from = `>=${fromMajor}.${fromMinor}.0`;
        } else {
            from = `>=${from}`;
        }
        if (isXVersion(toMajor)) {
            to = '';
        } else if (isXVersion(toMinor)) {
            to = `<${Number(toMajor) + 1}.0.0-0`;
        } else if (isXVersion(toPatch)) {
            to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
        } else if (toPreRelease) {
            to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    });
}
function parseComparatorTrim(range) {
    return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
    return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
    return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                if (major === '0') {
                    return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
                } else {
                    return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
                }
            } else if (preRelease) {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
                    }
                } else {
                    return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
                }
            } else {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
                    }
                }
                return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
            }
        })).join(' ');
}
function parseTildes(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
            } else if (preRelease) {
                return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        })).join(' ');
}
function parseXRanges(range) {
    return range.split(/\s+/).map((rangeVersion)=>rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease)=>{
            const isXMajor = isXVersion(major);
            const isXMinor = isXMajor || isXVersion(minor);
            const isXPatch = isXMinor || isXVersion(patch);
            if (gtlt === '=' && isXPatch) {
                gtlt = '';
            }
            preRelease = '';
            if (isXMajor) {
                if (gtlt === '>' || gtlt === '<') {
                    // nothing is allowed
                    return '<0.0.0-0';
                } else {
                    // nothing is forbidden
                    return '*';
                }
            } else if (gtlt && isXPatch) {
                // replace X with 0
                if (isXMinor) {
                    minor = 0;
                }
                patch = 0;
                if (gtlt === '>') {
                    // >1 => >=2.0.0
                    // >1.2 => >=1.3.0
                    gtlt = '>=';
                    if (isXMinor) {
                        major = Number(major) + 1;
                        minor = 0;
                        patch = 0;
                    } else {
                        minor = Number(minor) + 1;
                        patch = 0;
                    }
                } else if (gtlt === '<=') {
                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
                    // Similarly, <=7.x is actually <8.0.0, etc.
                    gtlt = '<';
                    if (isXMinor) {
                        major = Number(major) + 1;
                    } else {
                        minor = Number(minor) + 1;
                    }
                }
                if (gtlt === '<') {
                    preRelease = '-0';
                }
                return `${gtlt + major}.${minor}.${patch}${preRelease}`;
            } else if (isXMinor) {
                return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
            } else if (isXPatch) {
                return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return ret;
        })).join(' ');
}
function parseStar(range) {
    return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
    return comparatorString.trim().replace(parseRegex(gte0), '');
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
    rangeAtom = Number(rangeAtom) || rangeAtom;
    versionAtom = Number(versionAtom) || versionAtom;
    if (rangeAtom > versionAtom) {
        return 1;
    }
    if (rangeAtom === versionAtom) {
        return 0;
    }
    return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
    const { preRelease: rangePreRelease } = rangeAtom;
    const { preRelease: versionPreRelease } = versionAtom;
    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
        return 1;
    }
    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
        return -1;
    }
    if (rangePreRelease === undefined && versionPreRelease === undefined) {
        return 0;
    }
    for(let i = 0, n = rangePreRelease.length; i <= n; i++){
        const rangeElement = rangePreRelease[i];
        const versionElement = versionPreRelease[i];
        if (rangeElement === versionElement) {
            continue;
        }
        if (rangeElement === undefined && versionElement === undefined) {
            return 0;
        }
        if (!rangeElement) {
            return 1;
        }
        if (!versionElement) {
            return -1;
        }
        return compareAtom(rangeElement, versionElement);
    }
    return 0;
}
function compareVersion(rangeAtom, versionAtom) {
    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
    return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
    switch(rangeAtom.operator){
        case '':
        case '=':
            return eq(rangeAtom, versionAtom);
        case '>':
            return compareVersion(rangeAtom, versionAtom) < 0;
        case '>=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
        case '<':
            return compareVersion(rangeAtom, versionAtom) > 0;
        case '<=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
        case undefined:
            {
                // mean * or x -> all versions
                return true;
            }
        default:
            return false;
    }
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
function parseComparatorString(range) {
    return pipe(// handle caret
    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets, // handle tilde
    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
    return pipe(// handle hyphenRange
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen, // handle trim comparator
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim, // handle trim tilde
    // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim, // handle trim caret
    // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
    if (!version) {
        return false;
    }
    const parsedRange = parseRange(range);
    const parsedComparator = parsedRange.split(' ').map((rangeVersion)=>parseComparatorString(rangeVersion)).join(' ');
    const comparators = parsedComparator.split(/\s+/).map((comparator)=>parseGTE0(comparator));
    const extractedVersion = extractComparator(version);
    if (!extractedVersion) {
        return false;
    }
    const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
    const versionAtom = {
        operator: versionOperator,
        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
        major: versionMajor,
        minor: versionMinor,
        patch: versionPatch,
        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
    };
    for (const comparator of comparators){
        const extractedComparator = extractComparator(comparator);
        if (!extractedComparator) {
            return false;
        }
        const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
        const rangeAtom = {
            operator: rangeOperator,
            version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
            major: rangeMajor,
            minor: rangeMinor,
            patch: rangePatch,
            preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
        };
        if (!compare(rangeAtom, versionAtom)) {
            return false; // early return
        }
    }
    return true;
}

function formatShare(shareArgs, from, name, shareStrategy) {
    let get;
    if ('get' in shareArgs) {
        // eslint-disable-next-line prefer-destructuring
        get = shareArgs.get;
    } else if ('lib' in shareArgs) {
        get = ()=>Promise.resolve(shareArgs.lib);
    } else {
        get = ()=>Promise.resolve(()=>{
                throw new Error(`Can not get shared '${name}'!`);
            });
    }
    if (shareArgs.strategy) {
        warn(`"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"`);
    }
    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        deps: [],
        useIn: [],
        from,
        loading: null
    }, shareArgs, {
        shareConfig: (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
            requiredVersion: `^${shareArgs.version}`,
            singleton: false,
            eager: false,
            strictVersion: false
        }, shareArgs.shareConfig),
        get,
        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'
        ],
        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
    });
}
function formatShareConfigs(globalOptions, userOptions) {
    const shareArgs = userOptions.shared || {};
    const from = userOptions.name;
    const shareInfos = Object.keys(shareArgs).reduce((res, pkgName)=>{
        const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
        res[pkgName] = res[pkgName] || [];
        arrayShareArgs.forEach((shareConfig)=>{
            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
        });
        return res;
    }, {});
    const shared = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, globalOptions.shared);
    Object.keys(shareInfos).forEach((shareKey)=>{
        if (!shared[shareKey]) {
            shared[shareKey] = shareInfos[shareKey];
        } else {
            shareInfos[shareKey].forEach((newUserSharedOptions)=>{
                const isSameVersion = shared[shareKey].find((sharedVal)=>sharedVal.version === newUserSharedOptions.version);
                if (!isSameVersion) {
                    shared[shareKey].push(newUserSharedOptions);
                }
            });
        }
    });
    return {
        shared,
        shareInfos
    };
}
function versionLt(a, b) {
    const transformInvalidVersion = (version)=>{
        const isNumberVersion = !Number.isNaN(Number(version));
        if (isNumberVersion) {
            const splitArr = version.split('.');
            let validVersion = version;
            for(let i = 0; i < 3 - splitArr.length; i++){
                validVersion += '.0';
            }
            return validVersion;
        }
        return version;
    };
    if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
        return true;
    } else {
        return false;
    }
}
const findVersion = (shareVersionMap, cb)=>{
    const callback = cb || function(prev, cur) {
        return versionLt(prev, cur);
    };
    return Object.keys(shareVersionMap).reduce((prev, cur)=>{
        if (!prev) {
            return cur;
        }
        if (callback(prev, cur)) {
            return cur;
        }
        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
        if (prev === '0') {
            return cur;
        }
        return prev;
    }, 0);
};
const isLoaded = (shared)=>{
    return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        return !isLoaded(versions[prev]) && versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        if (isLoaded(versions[cur])) {
            if (isLoaded(versions[prev])) {
                return Boolean(versionLt(prev, cur));
            } else {
                return true;
            }
        }
        if (isLoaded(versions[prev])) {
            return false;
        }
        return versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
    if (strategy === 'loaded-first') {
        return findSingletonVersionOrderByLoaded;
    }
    return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
    if (!localShareScopeMap) {
        return;
    }
    const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
    const scopes = Array.isArray(scope) ? scope : [
        scope
    ];
    for (const sc of scopes){
        if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
            const { requiredVersion } = shareConfig;
            const findShareFunction = getFindShareFunction(strategy);
            const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
            //@ts-ignore
            const defaultResolver = ()=>{
                if (shareConfig.singleton) {
                    if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
                        const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
                        if (shareConfig.strictVersion) {
                            error(msg);
                        } else {
                            warn(msg);
                        }
                    }
                    return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                } else {
                    if (requiredVersion === false || requiredVersion === '*') {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    if (satisfy(maxOrSingletonVersion, requiredVersion)) {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])){
                        if (satisfy(versionKey, requiredVersion)) {
                            return versionValue;
                        }
                    }
                }
            };
            const params = {
                shareScopeMap: localShareScopeMap,
                scope: sc,
                pkgName,
                version: maxOrSingletonVersion,
                GlobalFederation: Global.__FEDERATION__,
                resolver: defaultResolver
            };
            const resolveShared = resolveShare.emit(params) || params;
            return resolveShared.resolver();
        }
    }
}
function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
    const { pkgName, extraOptions, shareInfos } = options;
    const defaultResolver = (sharedOptions)=>{
        if (!sharedOptions) {
            return undefined;
        }
        const shareVersionMap = {};
        sharedOptions.forEach((shared)=>{
            shareVersionMap[shared.version] = shared;
        });
        const callback = function(prev, cur) {
            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
        };
        const maxVersion = findVersion(shareVersionMap, callback);
        return shareVersionMap[maxVersion];
    };
    var _extraOptions_resolver;
    const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}




/***/ }),

/***/ "./node_modules/@module-federation/sdk/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/index.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_LOG_KEY: function() { return /* binding */ BROWSER_LOG_KEY; },
/* harmony export */   BROWSER_LOG_VALUE: function() { return /* binding */ BROWSER_LOG_VALUE; },
/* harmony export */   ENCODE_NAME_PREFIX: function() { return /* binding */ ENCODE_NAME_PREFIX; },
/* harmony export */   EncodedNameTransformMap: function() { return /* binding */ EncodedNameTransformMap; },
/* harmony export */   FederationModuleManifest: function() { return /* binding */ FederationModuleManifest; },
/* harmony export */   Logger: function() { return /* binding */ Logger; },
/* harmony export */   MANIFEST_EXT: function() { return /* binding */ MANIFEST_EXT; },
/* harmony export */   MFModuleType: function() { return /* binding */ MFModuleType; },
/* harmony export */   MODULE_DEVTOOL_IDENTIFIER: function() { return /* binding */ MODULE_DEVTOOL_IDENTIFIER; },
/* harmony export */   ManifestFileName: function() { return /* binding */ ManifestFileName; },
/* harmony export */   NameTransformMap: function() { return /* binding */ NameTransformMap; },
/* harmony export */   NameTransformSymbol: function() { return /* binding */ NameTransformSymbol; },
/* harmony export */   SEPARATOR: function() { return /* binding */ SEPARATOR; },
/* harmony export */   StatsFileName: function() { return /* binding */ StatsFileName; },
/* harmony export */   TEMP_DIR: function() { return /* binding */ TEMP_DIR; },
/* harmony export */   assert: function() { return /* binding */ assert; },
/* harmony export */   composeKeyWithSeparator: function() { return /* binding */ composeKeyWithSeparator; },
/* harmony export */   containerPlugin: function() { return /* binding */ ContainerPlugin; },
/* harmony export */   containerReferencePlugin: function() { return /* binding */ ContainerReferencePlugin; },
/* harmony export */   createLink: function() { return /* binding */ createLink; },
/* harmony export */   createScript: function() { return /* binding */ createScript; },
/* harmony export */   createScriptNode: function() { return /* binding */ createScriptNode; },
/* harmony export */   decodeName: function() { return /* binding */ decodeName; },
/* harmony export */   encodeName: function() { return /* binding */ encodeName; },
/* harmony export */   error: function() { return /* binding */ error; },
/* harmony export */   generateExposeFilename: function() { return /* binding */ generateExposeFilename; },
/* harmony export */   generateShareFilename: function() { return /* binding */ generateShareFilename; },
/* harmony export */   generateSnapshotFromManifest: function() { return /* binding */ generateSnapshotFromManifest; },
/* harmony export */   getProcessEnv: function() { return /* binding */ getProcessEnv; },
/* harmony export */   getResourceUrl: function() { return /* binding */ getResourceUrl; },
/* harmony export */   inferAutoPublicPath: function() { return /* binding */ inferAutoPublicPath; },
/* harmony export */   isBrowserEnv: function() { return /* binding */ isBrowserEnv; },
/* harmony export */   isDebugMode: function() { return /* binding */ isDebugMode; },
/* harmony export */   isManifestProvider: function() { return /* binding */ isManifestProvider; },
/* harmony export */   isStaticResourcesEqual: function() { return /* binding */ isStaticResourcesEqual; },
/* harmony export */   loadScript: function() { return /* binding */ loadScript; },
/* harmony export */   loadScriptNode: function() { return /* binding */ loadScriptNode; },
/* harmony export */   logger: function() { return /* binding */ logger; },
/* harmony export */   moduleFederationPlugin: function() { return /* binding */ ModuleFederationPlugin; },
/* harmony export */   normalizeOptions: function() { return /* binding */ normalizeOptions; },
/* harmony export */   parseEntry: function() { return /* binding */ parseEntry; },
/* harmony export */   safeToString: function() { return /* binding */ safeToString; },
/* harmony export */   safeWrapper: function() { return /* binding */ safeWrapper; },
/* harmony export */   sharePlugin: function() { return /* binding */ SharePlugin; },
/* harmony export */   simpleJoinRemoteEntry: function() { return /* binding */ simpleJoinRemoteEntry; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.esm.js */ "./node_modules/@module-federation/sdk/dist/polyfills.esm.js");
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/next/dist/build/polyfills/process.js");


const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const BROWSER_LOG_VALUE = '1';
const NameTransformSymbol = {
    AT: '@',
    HYPHEN: '-',
    SLASH: '/'
};
const NameTransformMap = {
    [NameTransformSymbol.AT]: 'scope_',
    [NameTransformSymbol.HYPHEN]: '_',
    [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
    NPM: 'npm',
    APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';

var ContainerPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var SharePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

function isBrowserEnv() {
    return typeof window !== 'undefined';
}
function isDebugMode() {
    if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
        return Boolean(process.env['FEDERATION_DEBUG']);
    }
    return typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG);
}
const getProcessEnv = function() {
    return typeof process !== 'undefined' && process.env ? process.env : {};
};

const DEBUG_LOG = '[ FEDERATION DEBUG ]';
function safeGetLocalStorageItem() {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
        }
    } catch (error) {
        return typeof document !== 'undefined';
    }
    return false;
}
let Logger = class Logger {
    info(msg, info) {
        if (this.enable) {
            const argsToString = safeToString(info) || '';
            if (isBrowserEnv()) {
                console.info(`%c ${this.identifier}: ${msg} ${argsToString}`, 'color:#3300CC');
            } else {
                console.info('\x1b[34m%s', `${this.identifier}: ${msg} ${argsToString ? `\n${argsToString}` : ''}`);
            }
        }
    }
    logOriginalInfo(...args) {
        if (this.enable) {
            if (isBrowserEnv()) {
                console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
                console.log(...args);
            } else {
                console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
                console.log(...args);
            }
        }
    }
    constructor(identifier){
        this.enable = false;
        this.identifier = identifier || DEBUG_LOG;
        if (isBrowserEnv() && safeGetLocalStorageItem()) {
            this.enable = true;
        } else if (isDebugMode()) {
            this.enable = true;
        }
    }
};

const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR)=>{
    const strSplit = str.split(separator);
    const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
    const defaultVersion = '*';
    const isEntry = (s)=>s.startsWith('http') || s.includes(MANIFEST_EXT);
    // Check if the string starts with a type
    if (strSplit.length >= 2) {
        let [name, ...versionOrEntryArr] = strSplit;
        if (str.startsWith(separator)) {
            versionOrEntryArr = [
                devVersionOrUrl || strSplit.slice(-1)[0]
            ];
            name = strSplit.slice(0, -1).join(separator);
        }
        let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
        if (isEntry(versionOrEntry)) {
            return {
                name,
                entry: versionOrEntry
            };
        } else {
            // Apply version rule
            // devVersionOrUrl => inputVersion => defaultVersion
            return {
                name,
                version: versionOrEntry || defaultVersion
            };
        }
    } else if (strSplit.length === 1) {
        const [name] = strSplit;
        if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
            return {
                name,
                entry: devVersionOrUrl
            };
        }
        return {
            name,
            version: devVersionOrUrl || defaultVersion
        };
    } else {
        throw `Invalid entry value: ${str}`;
    }
};
const logger = new Logger();
const composeKeyWithSeparator =  function(...args) {
    if (!args.length) {
        return '';
    }
    return args.reduce((sum, cur)=>{
        if (!cur) {
            return sum;
        }
        if (!sum) {
            return cur;
        }
        return `${sum}${SEPARATOR}${cur}`;
    }, '');
};
const encodeName =  function(name, prefix = '', withExt = false) {
    try {
        const ext = withExt ? '.js' : '';
        return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
    } catch (err) {
        throw err;
    }
};
const decodeName =  function(name, prefix, withExt) {
    try {
        let decodedName = name;
        if (prefix) {
            if (!decodedName.startsWith(prefix)) {
                return decodedName;
            }
            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
        }
        decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
        if (withExt) {
            decodedName = decodedName.replace('.js', '');
        }
        return decodedName;
    } catch (err) {
        throw err;
    }
};
const generateExposeFilename =  (exposeName, withExt)=>{
    if (!exposeName) {
        return '';
    }
    let expose = exposeName;
    if (expose === '.') {
        expose = 'default_export';
    }
    if (expose.startsWith('./')) {
        expose = expose.replace('./', '');
    }
    return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename =  (pkgName, withExt)=>{
    if (!pkgName) {
        return '';
    }
    return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl)=>{
    if ('getPublicPath' in module) {
        let publicPath;
        if (!module.getPublicPath.startsWith('function')) {
            publicPath = new Function(module.getPublicPath)();
        } else {
            publicPath = new Function('return ' + module.getPublicPath)()();
        }
        return `${publicPath}${sourceUrl}`;
    } else if ('publicPath' in module) {
        return `${module.publicPath}${sourceUrl}`;
    } else {
        console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
        return '';
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg)=>{
    if (!condition) {
        error(msg);
    }
};
const error = (msg)=>{
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = (msg)=>{
    console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
    try {
        return JSON.stringify(info, null, 2);
    } catch (e) {
        return '';
    }
}

const simpleJoinRemoteEntry = (rPath, rName)=>{
    if (!rPath) {
        return rName;
    }
    const transformPath = (str)=>{
        if (str === '.') {
            return '';
        }
        if (str.startsWith('./')) {
            return str.replace('./', '');
        }
        if (str.startsWith('/')) {
            const strWithoutSlash = str.slice(1);
            if (strWithoutSlash.endsWith('/')) {
                return strWithoutSlash.slice(0, -1);
            }
            return strWithoutSlash;
        }
        return str;
    };
    const transformedPath = transformPath(rPath);
    if (!transformedPath) {
        return rName;
    }
    if (transformedPath.endsWith('/')) {
        return `${transformedPath}${rName}`;
    }
    return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
    return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
    var _manifest_metaData, _manifest_metaData1;
    const { remotes = {}, overrides = {}, version } = options;
    let remoteSnapshot;
    const getPublicPath = ()=>{
        if ('publicPath' in manifest.metaData) {
            if (manifest.metaData.publicPath === 'auto' && version) {
                // use same implementation as publicPath auto runtime module implements
                return inferAutoPublicPath(version);
            }
            return manifest.metaData.publicPath;
        } else {
            return manifest.metaData.getPublicPath;
        }
    };
    const overridesKeys = Object.keys(overrides);
    let remotesInfo = {};
    // If remotes are not provided, only the remotes in the manifest will be read
    if (!Object.keys(remotes).length) {
        var _manifest_remotes;
        remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next)=>{
            let matchedVersion;
            const name = next.federationContainerName;
            // overrides have higher priority
            if (overridesKeys.includes(name)) {
                matchedVersion = overrides[name];
            } else {
                if ('version' in next) {
                    matchedVersion = next.version;
                } else {
                    matchedVersion = next.entry;
                }
            }
            res[name] = {
                matchedVersion
            };
            return res;
        }, {})) || {};
    }
    // If remotes (deploy scenario) are specified, they need to be traversed again
    Object.keys(remotes).forEach((key)=>remotesInfo[key] = {
            // overrides will override dependencies
            matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
        });
    const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
    const { exposes } = manifest;
    let basicRemoteSnapshot = {
        version: version ? version : '',
        buildVersion,
        globalName,
        remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
        remoteEntryType,
        remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
        remoteTypesZip: remoteTypes.zip || '',
        remoteTypesAPI: remoteTypes.api || '',
        remotesInfo,
        shared: manifest == null ? void 0 : manifest.shared.map((item)=>({
                assets: item.assets,
                sharedName: item.name,
                version: item.version
            })),
        modules: exposes == null ? void 0 : exposes.map((expose)=>({
                moduleName: expose.name,
                modulePath: expose.path,
                assets: expose.assets
            }))
    };
    if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
        const prefetchInterface = manifest.metaData.prefetchInterface;
        basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            prefetchInterface
        });
    }
    if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
        const { path, name, type } = manifest.metaData.prefetchEntry;
        basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            prefetchEntry: simpleJoinRemoteEntry(path, name),
            prefetchEntryType: type
        });
    }
    if ('publicPath' in manifest.metaData) {
        remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            publicPath: getPublicPath()
        });
    } else {
        remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            getPublicPath: getPublicPath()
        });
    }
    if (ssrRemoteEntry) {
        const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
        remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
        remoteSnapshot.ssrRemoteEntryType = 'commonjs-module';
    }
    return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
    if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
        return true;
    } else {
        return false;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeWrapper(callback, disableWarn) {
    try {
        const res = await callback();
        return res;
    } catch (e) {
        !disableWarn && warn(e);
        return;
    }
}
function isStaticResourcesEqual(url1, url2) {
    const REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
    // Retrieve the existing script element by its src attribute
    let script = null;
    let needAttach = true;
    let timeout = 20000;
    let timeoutId;
    const scripts = document.getElementsByTagName('script');
    for(let i = 0; i < scripts.length; i++){
        const s = scripts[i];
        const scriptSrc = s.getAttribute('src');
        if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
            script = s;
            needAttach = false;
            break;
        }
    }
    if (!script) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = info.url;
        let createScriptRes = undefined;
        if (info.createScriptHook) {
            createScriptRes = info.createScriptHook(info.url, info.attrs);
            if (createScriptRes instanceof HTMLScriptElement) {
                script = createScriptRes;
            } else if (typeof createScriptRes === 'object') {
                if ('script' in createScriptRes && createScriptRes.script) {
                    script = createScriptRes.script;
                }
                if ('timeout' in createScriptRes && createScriptRes.timeout) {
                    timeout = createScriptRes.timeout;
                }
            }
        }
        const attrs = info.attrs;
        if (attrs && !createScriptRes) {
            Object.keys(attrs).forEach((name)=>{
                if (script) {
                    if (name === 'async' || name === 'defer') {
                        script[name] = attrs[name];
                    // Attributes that do not exist are considered overridden
                    } else if (!script.getAttribute(name)) {
                        script.setAttribute(name, attrs[name]);
                    }
                }
            });
        }
    }
    const onScriptComplete = async (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        var _info_cb;
        clearTimeout(timeoutId);
        // Prevent memory leaks in IE.
        if (script) {
            script.onerror = null;
            script.onload = null;
            safeWrapper(()=>{
                const { needDeleteScript = true } = info;
                if (needDeleteScript) {
                    (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
                }
            });
            if (prev && typeof prev === 'function') {
                var _info_cb1;
                const result = prev(event);
                if (result instanceof Promise) {
                    var _info_cb2;
                    const res = await result;
                    info == null ? void 0 : (_info_cb2 = info.cb) == null ? void 0 : _info_cb2.call(info);
                    return res;
                }
                info == null ? void 0 : (_info_cb1 = info.cb) == null ? void 0 : _info_cb1.call(info);
                return result;
            }
        }
        info == null ? void 0 : (_info_cb = info.cb) == null ? void 0 : _info_cb.call(info);
    };
    script.onerror = onScriptComplete.bind(null, script.onerror);
    script.onload = onScriptComplete.bind(null, script.onload);
    timeoutId = setTimeout(()=>{
        onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
    }, timeout);
    return {
        script,
        needAttach
    };
}
function createLink(info) {
    // <link rel="preload" href="script.js" as="script">
    // Retrieve the existing script element by its src attribute
    let link = null;
    let needAttach = true;
    const links = document.getElementsByTagName('link');
    for(let i = 0; i < links.length; i++){
        const l = links[i];
        const linkHref = l.getAttribute('href');
        const linkRef = l.getAttribute('ref');
        if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs['ref']) {
            link = l;
            needAttach = false;
            break;
        }
    }
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('href', info.url);
        let createLinkRes = undefined;
        const attrs = info.attrs;
        if (info.createLinkHook) {
            createLinkRes = info.createLinkHook(info.url, attrs);
            if (createLinkRes instanceof HTMLLinkElement) {
                link = createLinkRes;
            }
        }
        if (attrs && !createLinkRes) {
            Object.keys(attrs).forEach((name)=>{
                if (link && !link.getAttribute(name)) {
                    link.setAttribute(name, attrs[name]);
                }
            });
        }
    }
    const onLinkComplete = (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        // Prevent memory leaks in IE.
        if (link) {
            link.onerror = null;
            link.onload = null;
            safeWrapper(()=>{
                const { needDeleteLink = true } = info;
                if (needDeleteLink) {
                    (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
                }
            });
            if (prev) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const res = prev(event);
                info.cb();
                return res;
            }
        }
        info.cb();
    };
    link.onerror = onLinkComplete.bind(null, link.onerror);
    link.onload = onLinkComplete.bind(null, link.onload);
    return {
        link,
        needAttach
    };
}
function loadScript(url, info) {
    const { attrs = {}, createScriptHook } = info;
    return new Promise((resolve, _reject)=>{
        const { script, needAttach } = createScript({
            url,
            cb: resolve,
            attrs: (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
                fetchpriority: 'high'
            }, attrs),
            createScriptHook,
            needDeleteScript: true
        });
        needAttach && document.head.appendChild(script);
    });
}

function importNodeModule(name) {
    if (!name) {
        throw new Error('import specifier is required');
    }
    const importModule = new Function('name', `return import(name)`);
    return importModule(name).then((res)=>res).catch((error)=>{
        console.error(`Error importing module ${name}:`, error);
        throw error;
    });
}
const loadNodeFetch = async ()=>{
    const fetchModule = await importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
};
const lazyLoaderHookFetch = async (input, init)=>{
    // @ts-ignore
    const loaderHooks = __webpack_require__.federation.instance.loaderHook;
    const hook = (url, init)=>{
        return loaderHooks.lifecycle.fetch.emit(url, init);
    };
    const res = await hook(input, init || {});
    if (!res || !(res instanceof Response)) {
        const fetchFunction = typeof fetch === 'undefined' ? await loadNodeFetch() : fetch;
        return fetchFunction(input, init || {});
    }
    return res;
};
function createScriptNode(url, cb, attrs, createScriptHook) {
    if (createScriptHook) {
        const hookResult = createScriptHook(url);
        if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
            url = hookResult.url;
        }
    }
    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        console.error('Error constructing URL:', e);
        cb(new Error(`Invalid URL: ${e}`));
        return;
    }
    const getFetch = async ()=>{
        //@ts-ignore
        if (true) {
            try {
                //@ts-ignore
                const loaderHooks = __webpack_require__.federation.instance.loaderHook;
                if (loaderHooks.lifecycle.fetch) {
                    return lazyLoaderHookFetch;
                }
            } catch (e) {
                console.warn('federation.instance.loaderHook.lifecycle.fetch failed:', e);
            }
        }
        return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    };
    const handleScriptFetch = async (f, urlObj)=>{
        try {
            var _vm_constants;
            const res = await f(urlObj.href);
            const data = await res.text();
            const [path, vm] = await Promise.all([
                importNodeModule('path'),
                importNodeModule('vm')
            ]);
            const scriptContext = {
                exports: {},
                module: {
                    exports: {}
                }
            };
            const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
            const filename = path.basename(urlObj.pathname);
            var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
            const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                filename,
                importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
            });
            script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
            const exportedInterface = scriptContext.module.exports || scriptContext.exports;
            if (attrs && exportedInterface && attrs['globalName']) {
                const container = exportedInterface[attrs['globalName']] || exportedInterface;
                cb(undefined, container);
                return;
            }
            cb(undefined, exportedInterface);
        } catch (e) {
            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        }
    };
    getFetch().then((f)=>handleScriptFetch(f, urlObj)).catch((err)=>{
        cb(err);
    });
}
function loadScriptNode(url, info) {
    return new Promise((resolve, reject)=>{
        createScriptNode(url, (error, scriptContext)=>{
            if (error) {
                reject(error);
            } else {
                var _info_attrs, _info_attrs1;
                const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;
                const entryExports = globalThis[remoteEntryKey] = scriptContext;
                resolve(entryExports);
            }
        }, info.attrs, info.createScriptHook);
    });
}

function normalizeOptions(enableDefault, defaultOptions, key) {
    return function(options) {
        if (options === false) {
            return false;
        }
        if (typeof options === 'undefined') {
            if (enableDefault) {
                return defaultOptions;
            } else {
                return false;
            }
        }
        if (options === true) {
            return defaultOptions;
        }
        if (options && typeof options === 'object') {
            return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, defaultOptions, options);
        }
        throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
    };
}




/***/ }),

/***/ "./node_modules/@module-federation/sdk/dist/polyfills.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/polyfills.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}




/***/ }),

/***/ "./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENCODE_NAME_PREFIX: function() { return /* reexport safe */ _module_federation_sdk__WEBPACK_IMPORTED_MODULE_0__.ENCODE_NAME_PREFIX; },
/* harmony export */   FEDERATION_SUPPORTED_TYPES: function() { return /* binding */ FEDERATION_SUPPORTED_TYPES; }
/* harmony export */ });
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");


var FEDERATION_SUPPORTED_TYPES = [
    'script'
];




/***/ }),

/***/ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ federation; }
/* harmony export */ });
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/runtime */ "./node_modules/@module-federation/runtime/dist/index.esm.js");
/* harmony import */ var _constant_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.esm.js */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js");
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");




function attachShareScopeMap(webpackRequire) {
    if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
        return;
    }
    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
    webpackRequire.federation.hasAttachShareScopeMap = true;
}

function remotes(options) {
    var chunkId = options.chunkId, promises = options.promises, chunkMapping = options.chunkMapping, idToExternalAndNameMapping = options.idToExternalAndNameMapping, webpackRequire = options.webpackRequire, idToRemoteMap = options.idToRemoteMap;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach(function(id) {
            var getScope = webpackRequire.R;
            if (!getScope) {
                getScope = [];
            }
            var data = idToExternalAndNameMapping[id];
            var remoteInfos = idToRemoteMap[id];
            // @ts-ignore seems not work
            if (getScope.indexOf(data) >= 0) {
                return;
            }
            // @ts-ignore seems not work
            getScope.push(data);
            if (data.p) {
                return promises.push(data.p);
            }
            var onError = function(error) {
                if (!error) {
                    error = new Error('Container missing');
                }
                if (typeof error.message === 'string') {
                    error.message += '\nwhile loading "'.concat(data[1], '" from ').concat(data[2]);
                }
                webpackRequire.m[id] = function() {
                    throw error;
                };
                data.p = 0;
            };
            var handleFunction = function(fn, arg1, arg2, d, next, first) {
                try {
                    var promise = fn(arg1, arg2);
                    if (promise && promise.then) {
                        var p = promise.then(function(result) {
                            return next(result, d);
                        }, onError);
                        if (first) {
                            promises.push(data.p = p);
                        } else {
                            return p;
                        }
                    } else {
                        return next(promise, d, first);
                    }
                } catch (error) {
                    onError(error);
                }
            };
            var onExternal = function(external, _, first) {
                return external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
            };
            // eslint-disable-next-line no-var
            var onInitialized = function(_, external, first) {
                return handleFunction(external.get, data[1], getScope, 0, onFactory, first);
            };
            // eslint-disable-next-line no-var
            var onFactory = function(factory) {
                data.p = 1;
                webpackRequire.m[id] = function(module) {
                    module.exports = factory();
                };
            };
            var onRemoteLoaded = function() {
                try {
                    var remoteName = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__.decodeName)(remoteInfos[0].name, _module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__.ENCODE_NAME_PREFIX);
                    var remoteModuleName = remoteName + data[1].slice(1);
                    return webpackRequire.federation.instance.loadRemote(remoteModuleName, {
                        loadFactory: false,
                        from: 'build'
                    });
                } catch (error) {
                    onError(error);
                }
            };
            var useRuntimeLoad = remoteInfos.length === 1 && _constant_esm_js__WEBPACK_IMPORTED_MODULE_1__.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
            if (useRuntimeLoad) {
                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
            } else {
                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
            }
        });
    }
}

function consumes(options) {
    var chunkId = options.chunkId, promises = options.promises, chunkMapping = options.chunkMapping, installedModules = options.installedModules, moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach(function(id) {
            if (webpackRequire.o(installedModules, id)) {
                return promises.push(installedModules[id]);
            }
            var onFactory = function(factory) {
                installedModules[id] = 0;
                webpackRequire.m[id] = function(module) {
                    delete webpackRequire.c[id];
                    module.exports = factory();
                };
            };
            var onError = function(error) {
                delete installedModules[id];
                webpackRequire.m[id] = function(module) {
                    delete webpackRequire.c[id];
                    throw error;
                };
            };
            try {
                var federationInstance = webpackRequire.federation.instance;
                if (!federationInstance) {
                    throw new Error('Federation instance not found!');
                }
                var _moduleToHandlerMapping_id = moduleToHandlerMapping[id], shareKey = _moduleToHandlerMapping_id.shareKey, getter = _moduleToHandlerMapping_id.getter, shareInfo = _moduleToHandlerMapping_id.shareInfo;
                var promise = federationInstance.loadShare(shareKey, {
                    customShareInfo: shareInfo
                }).then(function(factory) {
                    if (factory === false) {
                        return getter();
                    }
                    return factory;
                });
                if (promise.then) {
                    promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
                } else {
                    // @ts-ignore maintain previous logic
                    onFactory(promise);
                }
            } catch (e) {
                onError(e);
            }
        });
    }
}

function initializeSharing(param) {
    var shareScopeName = param.shareScopeName, webpackRequire = param.webpackRequire, initPromises = param.initPromises, initTokens = param.initTokens, initScope = param.initScope;
    if (!initScope) initScope = [];
    var mfInstance = webpackRequire.federation.instance;
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken) initToken = initTokens[shareScopeName] = {
        from: mfInstance.name
    };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    var promise = initPromises[shareScopeName];
    if (promise) return promise;
    var warn = function(msg) {
        return typeof console !== 'undefined' && console.warn && console.warn(msg);
    };
    var initExternal = function(id) {
        var handleError = function(err) {
            return warn('Initialization of sharing external failed: ' + err);
        };
        try {
            var module = webpackRequire(id);
            if (!module) return;
            var initFn = function(module) {
                return module && module.init && // @ts-ignore compat legacy mf shared behavior
                module.init(webpackRequire.S[shareScopeName], initScope);
            };
            if (module.then) return promises.push(module.then(initFn, handleError));
            var initResult = initFn(module);
            // @ts-ignore
            if (initResult && typeof initResult !== 'boolean' && initResult.then) // @ts-ignore
            return promises.push(initResult['catch'](handleError));
        } catch (err) {
            handleError(err);
        }
    };
    var promises = mfInstance.initializeSharing(shareScopeName, {
        strategy: mfInstance.options.shareStrategy,
        initScope: initScope,
        from: 'build'
    });
    attachShareScopeMap(webpackRequire);
    var bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
    if (bundlerRuntimeRemotesOptions) {
        Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach(function(moduleId) {
            var info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
            var externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
            if (info.length > 1) {
                initExternal(externalModuleId);
            } else if (info.length === 1) {
                var remoteInfo = info[0];
                if (!_constant_esm_js__WEBPACK_IMPORTED_MODULE_1__.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
                    initExternal(externalModuleId);
                }
            }
        });
    }
    if (!promises.length) {
        return initPromises[shareScopeName] = true;
    }
    return initPromises[shareScopeName] = Promise.all(promises).then(function() {
        return initPromises[shareScopeName] = true;
    });
}

function handleInitialConsumes(options) {
    var moduleId = options.moduleId, moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire;
    var federationInstance = webpackRequire.federation.instance;
    if (!federationInstance) {
        throw new Error('Federation instance not found!');
    }
    var _moduleToHandlerMapping_moduleId = moduleToHandlerMapping[moduleId], shareKey = _moduleToHandlerMapping_moduleId.shareKey, shareInfo = _moduleToHandlerMapping_moduleId.shareInfo;
    try {
        return federationInstance.loadShareSync(shareKey, {
            customShareInfo: shareInfo
        });
    } catch (err) {
        console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
        console.error('The original error message is as follows: ');
        throw err;
    }
}
function installInitialConsumes(options) {
    var moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire, installedModules = options.installedModules, initialConsumes = options.initialConsumes;
    initialConsumes.forEach(function(id) {
        webpackRequire.m[id] = function(module) {
            // Handle scenario when module is used synchronously
            installedModules[id] = 0;
            delete webpackRequire.c[id];
            var factory = handleInitialConsumes({
                moduleId: id,
                moduleToHandlerMapping: moduleToHandlerMapping,
                webpackRequire: webpackRequire
            });
            if (typeof factory !== 'function') {
                throw new Error("Shared module is not available for eager consumption: ".concat(id));
            }
            module.exports = factory();
        };
    });
}

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function initContainerEntry(options) {
    var webpackRequire = options.webpackRequire, shareScope = options.shareScope, initScope = options.initScope, shareScopeKey = options.shareScopeKey, remoteEntryInitOptions = options.remoteEntryInitOptions;
    if (!webpackRequire.S) return;
    if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
    var federationInstance = webpackRequire.federation.instance;
    var name = shareScopeKey || 'default';
    federationInstance.initOptions(_object_spread({
        name: webpackRequire.federation.initOptions.name,
        remotes: []
    }, remoteEntryInitOptions));
    federationInstance.initShareScopeMap(name, shareScope, {
        hostShareScopeMap: (remoteEntryInitOptions === null || remoteEntryInitOptions === void 0 ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
    });
    if (webpackRequire.federation.attachShareScopeMap) {
        webpackRequire.federation.attachShareScopeMap(webpackRequire);
    }
    // @ts-ignore
    return webpackRequire.I(name, initScope);
}

var federation = {
    runtime: _module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__,
    instance: undefined,
    initOptions: undefined,
    bundlerRuntime: {
        remotes: remotes,
        consumes: consumes,
        I: initializeSharing,
        S: {},
        installInitialConsumes: installInitialConsumes,
        initContainerEntry: initContainerEntry
    },
    attachShareScopeMap: attachShareScopeMap,
    bundlerRuntimeOptions: {}
};




/***/ }),

/***/ "./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ }),

/***/ "webpack/container/entry/host":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var moduleMap = {
	"./noop": function() {
		return __webpack_require__.e(/*! __federation_expose_noop */ "__federation_expose_noop").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/@module-federation/nextjs-mf/dist/src/federation-noop.js */ "./node_modules/@module-federation/nextjs-mf/dist/src/federation-noop.js")); }; });
	},
	"./react": function() {
		return __webpack_require__.e(/*! __federation_expose_react */ "__federation_expose_react").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js")); }; });
	},
	"./react-dom": function() {
		return __webpack_require__.e(/*! __federation_expose_react_dom */ "__federation_expose_react_dom").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js")); }; });
	},
	"./next/router": function() {
		return __webpack_require__.e(/*! __federation_expose_next__router */ "__federation_expose_next__router").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/next/router.js */ "./node_modules/next/router.js")); }; });
	},
	"./pages-map": function() {
		return __webpack_require__.e(/*! __federation_expose_pages_map */ "__federation_expose_pages_map").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js!./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js */ "./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js!./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js")); }; });
	},
	"./pages-map-v2": function() {
		return __webpack_require__.e(/*! __federation_expose_pages_map_v2 */ "__federation_expose_pages_map_v2").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js?v2!./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js */ "./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js?v2!./node_modules/@module-federation/nextjs-mf/dist/src/loaders/nextPageMapLoader.js")); }; });
	},
	"./pages/index": function() {
		return __webpack_require__.e(/*! __federation_expose_pages__index */ "__federation_expose_pages__index").then(function() { return function() { return (__webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope, remoteEntryInitOptions) {
	return __webpack_require__.federation.bundlerRuntime.initContainerEntry({	webpackRequire: __webpack_require__,
		shareScope: shareScope,
		initScope: initScope,
		remoteEntryInitOptions: remoteEntryInitOptions,
		shareScopeKey: "default"
	})
};
__webpack_require__(/*! ./node_modules/.federation/entry.696383161b1a5cf2b22663902d5bcfca.js */ "./node_modules/.federation/entry.696383161b1a5cf2b22663902d5bcfca.js")

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

/***/ }),

/***/ "webpack/container/reference/remote2":
/*!*****************************************************************************!*\
  !*** external "HostMfe@http://localhost:3002/static/chunks/remoteEntry.js" ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
var __webpack_error__ = new Error();
module.exports = new Promise(function(resolve, reject) {
	if(typeof HostMfe !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:3002/static/chunks/remoteEntry.js", function(event) {
		if(typeof HostMfe !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "HostMfe");
}).then(function() { return HostMfe; });

/***/ }),

/***/ "./node_modules/@module-federation/nextjs-mf/dist/src/plugins/container/runtimePlugin.js?runtimePlugin":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@module-federation/nextjs-mf/dist/src/plugins/container/runtimePlugin.js?runtimePlugin ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
function default_1() {
    return {
        name: 'next-internal-plugin',
        createScript: function (args) {
            // Updated type
            var url = args.url;
            var attrs = args.attrs;
            if (typeof window !== 'undefined') {
                var script = document.createElement('script');
                script.src = url;
                script.async = true;
                delete attrs?.['crossorigin'];
                return { script: script, timeout: 8000 };
            }
            return undefined;
        },
        errorLoadRemote: function (args) {
            var id = args.id;
            var error = args.error;
            var from = args.from;
            console.error(id, 'offline');
            var pg = function () {
                console.error(id, 'offline', error);
                return null;
            };
            pg.getInitialProps = function (ctx) {
                // Type assertion to add getInitialProps
                return {};
            };
            var mod;
            if (from === 'build') {
                mod = function () {
                    return {
                        __esModule: true,
                        default: pg,
                        getServerSideProps: function () {
                            return { props: {} };
                        },
                    };
                };
            }
            else {
                mod = {
                    default: pg,
                    getServerSideProps: function () {
                        return { props: {} };
                    },
                };
            }
            return mod;
        },
        beforeInit: function (args) {
            if (!globalThis.usedChunks)
                globalThis.usedChunks = new Set();
            if (typeof __webpack_require__.j === 'string' &&
                !__webpack_require__.j.startsWith('webpack')) {
                return args;
            }
            var moduleCache = args.origin.moduleCache;
            var name = args.origin.name;
            var gs = new Function('return globalThis')();
            var attachedRemote = gs[name];
            if (attachedRemote) {
                moduleCache.set(name, attachedRemote);
            }
            return args;
        },
        init: function (args) {
            return args;
        },
        beforeRequest: function (args) {
            var options = args.options;
            var id = args.id;
            var remoteName = id.split('/').shift();
            var remote = options.remotes.find(function (remote) {
                return remote.name === remoteName;
            });
            if (!remote)
                return args;
            if (remote && remote.entry && remote.entry.includes('?t=')) {
                return args;
            }
            remote.entry = remote.entry + '?t=' + Date.now();
            return args;
        },
        afterResolve: function (args) {
            return args;
        },
        onLoad: function (args) {
            var exposeModuleFactory = args.exposeModuleFactory;
            var exposeModule = args.exposeModule;
            var id = args.id;
            var moduleOrFactory = exposeModuleFactory || exposeModule;
            if (!moduleOrFactory)
                return args; // Ensure moduleOrFactory is defined
            if (typeof window === 'undefined') {
                var exposedModuleExports;
                try {
                    exposedModuleExports = moduleOrFactory();
                }
                catch (e) {
                    exposedModuleExports = moduleOrFactory;
                }
                var handler = {
                    get: function (target, prop, receiver) {
                        // Check if accessing a static property of the function itself
                        if (target === exposedModuleExports &&
                            typeof exposedModuleExports[prop] === 'function') {
                            return function () {
                                globalThis.usedChunks.add(id);
                                return exposedModuleExports[prop].apply(this, arguments);
                            };
                        }
                        var originalMethod = target[prop];
                        if (typeof originalMethod === 'function') {
                            var proxiedFunction = function () {
                                globalThis.usedChunks.add(id);
                                return originalMethod.apply(this, arguments);
                            };
                            // Copy all enumerable properties from the original method to the proxied function
                            Object.keys(originalMethod).forEach(function (prop) {
                                Object.defineProperty(proxiedFunction, prop, {
                                    value: originalMethod[prop],
                                    writable: true,
                                    enumerable: true,
                                    configurable: true,
                                });
                            });
                            return proxiedFunction;
                        }
                        return Reflect.get(target, prop, receiver);
                    },
                };
                if (typeof exposedModuleExports === 'function') {
                    // If the module export is a function, we create a proxy that can handle both its
                    // call (as a function) and access to its properties (including static methods).
                    exposedModuleExports = new Proxy(exposedModuleExports, handler);
                    // Proxy static properties specifically
                    var staticProps = Object.getOwnPropertyNames(exposedModuleExports);
                    staticProps.forEach(function (prop) {
                        if (typeof exposedModuleExports[prop] === 'function') {
                            exposedModuleExports[prop] = new Proxy(exposedModuleExports[prop], handler);
                        }
                    });
                    return function () {
                        return exposedModuleExports;
                    };
                }
                else {
                    // For objects, just wrap the exported object itself
                    exposedModuleExports = new Proxy(exposedModuleExports, handler);
                }
                return exposedModuleExports;
            }
            return args;
        },
        resolveShare: function (args) {
            if (args.pkgName !== 'react' &&
                args.pkgName !== 'react-dom' &&
                !args.pkgName.startsWith('next/')) {
                return args;
            }
            var shareScopeMap = args.shareScopeMap;
            var scope = args.scope;
            var pkgName = args.pkgName;
            var version = args.version;
            var GlobalFederation = args.GlobalFederation;
            var host = GlobalFederation['__INSTANCES__'][0];
            if (!host) {
                return args;
            }
            if (!host.options.shared[pkgName]) {
                return args;
            }
            //handle react host next remote, disable resolving when not next host
            args.resolver = function () {
                shareScopeMap[scope][pkgName][version] =
                    host.options.shared[pkgName][0]; // replace local share scope manually with desired module
                return shareScopeMap[scope][pkgName][version];
            };
            return args;
        },
        beforeLoadShare: async function (args) {
            return args;
        },
    };
}
//# sourceMappingURL=runtimePlugin.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/federation runtime */
/******/ 	!function() {
/******/ 		if(!__webpack_require__.federation){
/******/ 			__webpack_require__.federation = {
/******/ 				initOptions: {"name":"host","remotes":[{"alias":"remote1","name":"remoteApp","entry":"http://localhost:3001/static/chunks/remoteEntry.js","shareScope":"default"},{"alias":"remote2","name":"HostMfe","entry":"http://localhost:3002/static/chunks/remoteEntry.js","shareScope":"default"}],"shareStrategy":"loaded-first"},
/******/ 				chunkMatcher: function(chunkId) {return !/^webpack_container_remote_remote2_(Dashboard|Navbar|ProductList)$/.test(chunkId)},
/******/ 				rootOutputDir: "",
/******/ 				initialConsumes: undefined,
/******/ 				bundlerRuntimeOptions: {}
/******/ 			};
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/chunks/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "static/webpack/" + __webpack_require__.h() + ".host.hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "510d6679f01ff996"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "host:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = __webpack_require__.tu(url);
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	!function() {
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_remote_remote2_Navbar": [
/******/ 				"webpack/container/remote/remote2/Navbar"
/******/ 			],
/******/ 			"webpack_container_remote_remote2_Dashboard": [
/******/ 				"webpack/container/remote/remote2/Dashboard"
/******/ 			],
/******/ 			"webpack_container_remote_remote2_ProductList": [
/******/ 				"webpack/container/remote/remote2/ProductList"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/remote2/Navbar": [
/******/ 				"default",
/******/ 				"./Navbar",
/******/ 				"webpack/container/reference/remote2"
/******/ 			],
/******/ 			"webpack/container/remote/remote2/Dashboard": [
/******/ 				"default",
/******/ 				"./Dashboard",
/******/ 				"webpack/container/reference/remote2"
/******/ 			],
/******/ 			"webpack/container/remote/remote2/ProductList": [
/******/ 				"default",
/******/ 				"./ProductList",
/******/ 				"webpack/container/reference/remote2"
/******/ 			]
/******/ 		};
/******/ 		var idToRemoteMap = {
/******/ 			"webpack/container/remote/remote2/Navbar": [
/******/ 				{
/******/ 					"externalType": "script",
/******/ 					"name": "HostMfe",
/******/ 					"externalModuleId": "webpack/container/reference/remote2"
/******/ 				}
/******/ 			],
/******/ 			"webpack/container/remote/remote2/Dashboard": [
/******/ 				{
/******/ 					"externalType": "script",
/******/ 					"name": "HostMfe",
/******/ 					"externalModuleId": "webpack/container/reference/remote2"
/******/ 				}
/******/ 			],
/******/ 			"webpack/container/remote/remote2/ProductList": [
/******/ 				{
/******/ 					"externalType": "script",
/******/ 					"name": "HostMfe",
/******/ 					"externalModuleId": "webpack/container/reference/remote2"
/******/ 				}
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.federation.bundlerRuntimeOptions.remotes = {idToRemoteMap,chunkMapping, idToExternalAndNameMapping, webpackRequire:__webpack_require__};
/******/ 		__webpack_require__.f.remotes = function(chunkId, promises) {
/******/ 			__webpack_require__.federation.bundlerRuntime.remotes({idToRemoteMap,chunkMapping, idToExternalAndNameMapping, chunkId, promises, webpackRequire:__webpack_require__});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = "host";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "host";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("next/dynamic", "14.2.10", function() { return __webpack_require__.e("node_modules_next_dynamic_js-_73d41").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/dynamic.js */ "./node_modules/next/dynamic.js"); }; }); });
/******/ 					register("next/head", "14.2.10", function() { return __webpack_require__.e("node_modules_next_head_js-_88490").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/head.js */ "./node_modules/next/head.js"); }; }); });
/******/ 					register("next/image", "14.2.10", function() { return __webpack_require__.e("node_modules_next_image_js-_05350").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/image.js */ "./node_modules/next/image.js"); }; }); });
/******/ 					register("next/link", "14.2.10", function() { return __webpack_require__.e("node_modules_next_link_js-_75b30").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/link.js */ "./node_modules/next/link.js"); }; }); });
/******/ 					register("next/router", "14.2.10", function() { return __webpack_require__.e("__federation_expose_next__router").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/router.js */ "./node_modules/next/router.js"); }; }); });
/******/ 					register("next/script", "14.2.10", function() { return __webpack_require__.e("node_modules_next_script_js-_e4ba0").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/script.js */ "./node_modules/next/script.js"); }; }); });
/******/ 					register("react-dom/client", "18.3.1", function() { return __webpack_require__.e("node_modules_react-dom_client_js-_af810").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/client.js */ "./node_modules/react-dom/client.js"); }; }); });
/******/ 					register("react-dom", "18.3.1", function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"); }; }); });
/******/ 					register("react/jsx-dev-runtime", "18.3.1", function() { return __webpack_require__.e("node_modules_react_jsx-dev-runtime_js-_57771").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-dev-runtime.js */ "./node_modules/react/jsx-dev-runtime.js"); }; }); });
/******/ 					register("react/jsx-runtime", "18.3.1", function() { return __webpack_require__.e("node_modules_react_jsx-runtime_js-_34d01").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-runtime.js */ "./node_modules/react/jsx-runtime.js"); }; }); });
/******/ 					register("react", "18.3.1", function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"); }; }); });
/******/ 					register("styled-jsx/style", "5.1.1", function() { return __webpack_require__.e("node_modules_styled-jsx_style_js-_d2181").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/style.js */ "./node_modules/styled-jsx/style.js"); }; }); });
/******/ 					register("styled-jsx", "5.1.1", function() { return __webpack_require__.e("node_modules_styled-jsx_index_js-_81f81").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/index.js */ "./node_modules/styled-jsx/index.js"); }; }); });
/******/ 					initExternal("webpack/container/reference/remote2");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: function(url) { return url; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	!function() {
/******/ 		__webpack_require__.tu = function(url) { return __webpack_require__.tt().createScriptURL(url); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.federation.initOptions.shared = {	"next/dynamic": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("node_modules_next_dynamic_js-_73d41").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/dynamic.js */ "./node_modules/next/dynamic.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/head": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("node_modules_next_head_js-_88490").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/head.js */ "./node_modules/next/head.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/image": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("node_modules_next_image_js-_05350").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/image.js */ "./node_modules/next/image.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/link": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("node_modules_next_link_js-_75b30").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/link.js */ "./node_modules/next/link.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/router": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("__federation_expose_next__router").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/router.js */ "./node_modules/next/router.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/script": [{	version: "14.2.10",
/******/ 				get: function() { return __webpack_require__.e("node_modules_next_script_js-_e4ba0").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/script.js */ "./node_modules/next/script.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom/client": [{	version: "18.3.1",
/******/ 				get: function() { return __webpack_require__.e("node_modules_react-dom_client_js-_af810").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/client.js */ "./node_modules/react-dom/client.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom": [{	version: "18.3.1",
/******/ 				get: function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-dev-runtime": [{	version: "18.3.1",
/******/ 				get: function() { return __webpack_require__.e("node_modules_react_jsx-dev-runtime_js-_57771").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-dev-runtime.js */ "./node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-runtime": [{	version: "18.3.1",
/******/ 				get: function() { return __webpack_require__.e("node_modules_react_jsx-runtime_js-_34d01").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-runtime.js */ "./node_modules/react/jsx-runtime.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react": [{	version: "18.3.1",
/******/ 				get: function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"styled-jsx/style": [{	version: "5.1.1",
/******/ 				get: function() { return __webpack_require__.e("node_modules_styled-jsx_style_js-_d2181").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/style.js */ "./node_modules/styled-jsx/style.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],	"styled-jsx": [{	version: "5.1.1",
/******/ 				get: function() { return __webpack_require__.e("node_modules_styled-jsx_index_js-_81f81").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/index.js */ "./node_modules/styled-jsx/index.js"); }; }); },
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],}
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 				webpackRequire: __webpack_require__,
/******/ 				initPromises: initPromises,
/******/ 				initTokens: initTokens,
/******/ 				initScope: initScope,
/******/ 			})
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	!function() {
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/next/head/next/head": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_head_js-_88491").then(function() { return function() { return __webpack_require__(/*! next/head */ "./node_modules/next/head.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^12 || ^13 || ^14",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/head",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/router/next/router": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_router_js").then(function() { return function() { return __webpack_require__(/*! next/router */ "./node_modules/next/router.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/router",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/link/next/link": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_link_js-_75b31").then(function() { return function() { return __webpack_require__(/*! next/link */ "./node_modules/next/link.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^12 || ^13 || ^14",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/link",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/script/next/script": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_script_js-_e4ba1").then(function() { return function() { return __webpack_require__(/*! next/script */ "./node_modules/next/script.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^12 || ^13 || ^14",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/script",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/image/next/image": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_image_js-_05351").then(function() { return function() { return __webpack_require__(/*! next/image */ "./node_modules/next/image.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^12 || ^13 || ^14",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/image",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/dynamic/next/dynamic?2ddf": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_dynamic_js-_73d42").then(function() { return function() { return __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^12 || ^13 || ^14",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/dynamic",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_react_jsx-runtime_js-_34d00").then(function() { return function() { return __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react/jsx-runtime",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/react/react": {
/******/ 				getter: function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! react */ "./node_modules/react/index.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/styled-jsx/styled-jsx": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_styled-jsx_index_js-_81f80").then(function() { return function() { return __webpack_require__(/*! styled-jsx */ "./node_modules/styled-jsx/index.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^5.1.1",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "styled-jsx",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_styled-jsx_style_js-_d2180").then(function() { return function() { return __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^5.1.1",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "styled-jsx/style",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom": {
/******/ 				getter: function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react-dom",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_react_jsx-dev-runtime_js-_57770").then(function() { return function() { return __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react/jsx-dev-runtime",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/next/dynamic/next/dynamic?ca68": {
/******/ 				getter: function() { return __webpack_require__.e("node_modules_next_dynamic_js-_73d40").then(function() { return function() { return __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js"); }; }); },
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^14.2.10",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "next/dynamic",
/******/ 			}
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"__federation_expose_noop": [
/******/ 				"webpack/sharing/consume/default/next/head/next/head",
/******/ 				"webpack/sharing/consume/default/next/router/next/router",
/******/ 				"webpack/sharing/consume/default/next/link/next/link",
/******/ 				"webpack/sharing/consume/default/next/script/next/script",
/******/ 				"webpack/sharing/consume/default/next/image/next/image",
/******/ 				"webpack/sharing/consume/default/next/dynamic/next/dynamic?2ddf",
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react",
/******/ 				"webpack/sharing/consume/default/styled-jsx/styled-jsx",
/******/ 				"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style"
/******/ 			],
/******/ 			"__federation_expose_react_dom": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"__federation_expose_next__router": [
/******/ 				"webpack/sharing/consume/default/react/react",
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"__federation_expose_pages__index": [
/******/ 				"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime",
/******/ 				"webpack/sharing/consume/default/next/dynamic/next/dynamic?ca68",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_dynamic_js-_73d41": [
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_head_js-_88490": [
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_image_js-_05350": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_link_js-_75b30": [
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_script_js-_e4ba0": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_react-dom_client_js-_af810": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"node_modules_react_jsx-dev-runtime_js-_57771": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_react_jsx-runtime_js-_34d01": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_styled-jsx_style_js-_d2181": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_styled-jsx_index_js-_81f81": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"node_modules_next_router_js": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"node_modules_next_script_js-_e4ba1": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"node_modules_next_image_js-_05351": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"node_modules_next_dynamic_js-_73d40": [
/******/ 				"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 			__webpack_require__.federation.bundlerRuntime.consumes({
/******/ 			chunkMapping: chunkMapping,
/******/ 			installedModules: installedModules,
/******/ 			chunkId: chunkId,
/******/ 			moduleToHandlerMapping: moduleToHandlerMapping,
/******/ 			promises: promises,
/******/ 			webpackRequire:__webpack_require__
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/embed/federation */
/******/ 	!function() {
/******/ 		var federation = __webpack_require__(/*! ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js");
/******/ 		federation = federation["default"]
/******/ 		var prevFederation = __webpack_require__.federation;
/******/ 		__webpack_require__.federation = {};
/******/ 		for (var key in federation) {
/******/ 			__webpack_require__.federation[key] = federation[key];
/******/ 		}
/******/ 		for (var key in prevFederation) {
/******/ 			__webpack_require__.federation[key] = prevFederation[key];
/******/ 		}
/******/ 		federation = undefined;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"host": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^webpack_container_remote_remote2_(Dashboard|Navbar|ProductList)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatehost"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhost"] = self["webpackChunkhost"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/inverted container startup */
/******/ 	!function() {
/******/ 		var innerRemote;
/******/ 		function attachRemote (resolve) {
/******/ 			if(__webpack_require__.m["webpack/container/entry/host"]) {
/******/ 				innerRemote = __webpack_require__("webpack/container/entry/host");
/******/ 			}
/******/ 			var gs = __webpack_require__.g || globalThis
/******/ 			gs["host"] = innerRemote
/******/ 			if(resolve) resolve(innerRemote);
/******/ 			return innerRemote;
/******/ 		};
/******/ 		attachRemote();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/host");
/******/ 	window.host = __webpack_exports__;
/******/ 	
/******/ })()
;