export STARKNET_RPC="https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/nY2Exo6EOH2Pvtylz1dAgzJ9UxWx7MLn"
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/keystore.json
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/account.json

test_reward_name="0 0x54657374526577617264546F6B656E 15"
test_reward_symbol="0 0x545352 3"

summit_address=0x06ebd6267dfe3e5965a0414b0e24d678e9baa5b679f232eef145ff2d8832400e

terminal_timestamp=1732330574

class_hash=0x0577c3980906c4ed5b48e9a3e957e38137e19926d2327599174097859f9c734a

# scarb build
# starkli declare target/dev/test_reward_SavageERC20.contract_class.json
starkli deploy $class_hash $test_reward_name $test_reward_symbol $summit_address $terminal_timestamp