# create a ts project according to package.json

## run node and rpc

```shell
./target/release/revive-dev-node --dev --tmp
# RUST_LOG="error,evm=debug,sc_rpc_server=info,runtime::revive=debug" ./target/release/revive-dev-node --dev --tmp
./target/release/eth-rpc --dev
# RUST_LOG="info,eth-rpc=debug" ./target/release/eth-rpc --dev
```
