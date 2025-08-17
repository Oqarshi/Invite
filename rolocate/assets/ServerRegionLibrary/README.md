# Tools Used to Find Server Regions on Roblox

## How It Works

1. A modified version of `rolocate` scans Roblox servers at a rate of ~2000 servers per minute.
2. It compares the discovered IPs to `serverregion.js`.
3. It generates a list of unknown server IPs.
4. The list of unknown server IPs is saved to `input.txt`.
5. `main.py` is run to find the regions of the unknown servers.
6. `main.py` automatically updates `serverregion.js`.
