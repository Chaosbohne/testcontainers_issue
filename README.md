
Test fails for testcontainers v7.12.0 & v7.11.1. Other versions have not been tested.

Logs if test fails:
```
  testcontainers DEBUG Creating new DockerClient +0ms
  testcontainers INFO Using default Docker host: localhost, socket path: /var/run/docker.sock +1ms
  testcontainers DEBUG Creating new Reaper for session: b8fd93d93a43d753570defb092b99e11 +12ms
  testcontainers INFO Creating container for image: cristianrgreco/ryuk:0.4.0 +5ms
  testcontainers INFO Starting container cristianrgreco/ryuk:0.4.0 with ID: 9e4443f0a79fe0902f3dbd0ee40c6a5eed20507dea6b9a8bd12908a306de9ba4 +1s
  testcontainers:containers TRACE 9e4443f0a79fe0902f3dbd0ee40c6a5eed20507dea6b9a8bd12908a306de9ba4:       &2021/07/07 06:59:30 Pinging Docker...
  testcontainers:containers       02021/07/07 06:59:30 Docker daemon is available!
  testcontainers:containers       -2021/07/07 06:59:30 Starting on port 8080...
  testcontainers:containers       2021/07/07 06:59:30 Started!
  testcontainers:containers  +0ms
  testcontainers DEBUG Waiting for container to be ready: 9e4443f0a79fe0902f3dbd0ee40c6a5eed20507dea6b9a8bd12908a306de9ba4 +680ms
  testcontainers DEBUG Waiting for log message "Started!" +0ms
  testcontainers INFO Container is ready +4ms
  testcontainers DEBUG Connecting to Reaper on localhost:33663 +0ms
  testcontainers WARN Connection to Reaper closed +4ms
```

Logs if test succeeds:

```
  testcontainers DEBUG Creating new DockerClient +0ms
  testcontainers INFO Using default Docker host: localhost, socket path: /var/run/docker.sock +1ms
  testcontainers DEBUG Creating new Reaper for session: 6bda3421245419a18ad03090fc128b71 +11ms
  testcontainers INFO Creating container for image: cristianrgreco/ryuk:0.4.0 +4ms
  testcontainers INFO Starting container cristianrgreco/ryuk:0.4.0 with ID: a84c17387672037c5dcb1e4a8c9fece2cb2986c661ec76adf1f7863ddb9957fe +1s
  testcontainers DEBUG Waiting for container to be ready: a84c17387672037c5dcb1e4a8c9fece2cb2986c661ec76adf1f7863ddb9957fe +597ms
  testcontainers DEBUG Waiting for log message "Started!" +1ms
  testcontainers:containers TRACE a84c17387672037c5dcb1e4a8c9fece2cb2986c661ec76adf1f7863ddb9957fe:       &2021/07/07 06:58:35 Pinging Docker...
  testcontainers:containers  +0ms
  testcontainers:containers TRACE a84c17387672037c5dcb1e4a8c9fece2cb2986c661ec76adf1f7863ddb9957fe:       02021/07/07 06:58:35 Docker daemon is available!
  testcontainers:containers       -2021/07/07 06:58:35 Starting on port 8080...
  testcontainers:containers       2021/07/07 06:58:35 Started!
  testcontainers:containers  +4ms
  testcontainers INFO Container is ready +14ms
  testcontainers DEBUG Connecting to Reaper on localhost:23657 +0ms
  testcontainers DEBUG Connected to Reaper +3ms
  testcontainers INFO Creating container for image: postgres:latest +0ms
  testcontainers:containers TRACE a84c17387672037c5dcb1e4a8c9fece2cb2986c661ec76adf1f7863ddb9957fe:       ;2021/07/07 06:58:35 New client connected: 172.17.0.1:56770
  testcontainers:containers       m2021/07/07 06:58:35 Adding {"label":{"org.testcontainers.session-id=6bda3421245419a18ad03090fc128b71":true}}
  testcontainers:containers       22021/07/07 06:58:35 Received the first connection
  testcontainers:containers  +6ms
  testcontainers INFO Starting container postgres:latest with ID: 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +114ms
  testcontainers DEBUG Waiting for container to be ready: 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +473ms
  testcontainers DEBUG Waiting for host port 51567 for 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +0ms
  testcontainers DEBUG Waiting for internal port 5432 for 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +2ms
  testcontainers DEBUG Host port 51567 ready for 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +107ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       NThe files belonging to this database system will be owned by user "postgres".
  testcontainers:containers       ,This user must also own the server process.
  testcontainers:containers       
  testcontainers:containers  +748ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       CThe database cluster will be initialized with locale "en_US.utf8".
  testcontainers:containers       BThe default database encoding has accordingly been set to "UTF8".
  testcontainers:containers       @The default text search configuration will be set to "english".
  testcontainers:containers       
  testcontainers:containers       "Data page checksums are disabled.
  testcontainers:containers       
  testcontainers:containers       Ifixing permissions on existing directory /var/lib/postgresql/data ... ok
  testcontainers:containers  +1ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       creating subdirectories ... ok
  testcontainers:containers       9selecting dynamic shared memory implementation ... posix
  testcontainers:containers  +0ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       *selecting default max_connections ... 100
  testcontainers:containers  +28ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       +selecting default shared_buffers ... 128MB
  testcontainers:containers  +13ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       (selecting default time zone ... Etc/UTC
  testcontainers:containers  +28ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       $creating configuration files ... ok
  testcontainers:containers  +3ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:        running bootstrap script ... ok
  testcontainers:containers  +177ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       0performing post-bootstrap initialization ... ok
  testcontainers:containers  +460ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       Ginitdb: warning: enabling "trust" authentication for local connections
  testcontainers:containers       FYou can change this by editing pg_hba.conf or using the option -A, or
  testcontainers:containers       <--auth-local and --auth-host, the next time you run initdb.
  testcontainers:containers       syncing data to disk ... ok
  testcontainers:containers       
  testcontainers:containers       
  testcontainers:containers       6Success. You can now start the database server using:
  testcontainers:containers       
  testcontainers:containers       8    pg_ctl -D /var/lib/postgresql/data -l logfile start
  testcontainers:containers       
  testcontainers:containers  +248ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       �waiting for server to start....2021-07-07 06:58:37.514 UTC [100] LOG:  starting PostgreSQL 13.3 (Debian 13.3-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
  testcontainers:containers  +38ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       e2021-07-07 06:58:37.518 UTC [100] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
  testcontainers:containers  +4ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       a2021-07-07 06:58:37.533 UTC [110] LOG:  database system was shut down at 2021-07-07 06:58:37 UTC
  testcontainers:containers  +14ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       W2021-07-07 06:58:37.539 UTC [100] LOG:  database system is ready to accept connections
  testcontainers:containers  +6ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:        done
  testcontainers:containers       server started
  testcontainers:containers  +52ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       
  testcontainers:containers       L/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
  testcontainers:containers       
  testcontainers:containers  +81ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       G2021-07-07 06:58:37.672 UTC [100] LOG:  received fast shutdown request
  testcontainers:containers  +1ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       lwaiting for server to shut down....2021-07-07 06:58:37.677 UTC [100] LOG:  aborting any active transactions
  testcontainers:containers  +5ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       {2021-07-07 06:58:37.678 UTC [100] LOG:  background worker "logical replication launcher" (PID 116) exited with exit code 1
  testcontainers:containers       62021-07-07 06:58:37.678 UTC [111] LOG:  shutting down
  testcontainers:containers  +1ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       E2021-07-07 06:58:37.707 UTC [100] LOG:  database system is shut down
  testcontainers:containers  +29ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:        done
  testcontainers:containers       server stopped
  testcontainers:containers       
  testcontainers:containers  +65ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       6PostgreSQL init process complete; ready for start up.
  testcontainers:containers       
  testcontainers:containers  +0ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       �2021-07-07 06:58:37.800 UTC [1] LOG:  starting PostgreSQL 13.3 (Debian 13.3-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
  testcontainers:containers       U2021-07-07 06:58:37.800 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
  testcontainers:containers       P2021-07-07 06:58:37.800 UTC [1] LOG:  listening on IPv6 address "::", port 5432
  testcontainers:containers  +28ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       c2021-07-07 06:58:37.809 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
  testcontainers:containers  +9ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       a2021-07-07 06:58:37.820 UTC [135] LOG:  database system was shut down at 2021-07-07 06:58:37 UTC
  testcontainers:containers  +11ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       U2021-07-07 06:58:37.827 UTC [1] LOG:  database system is ready to accept connections
  testcontainers:containers  +6ms
  testcontainers DEBUG Internal port 5432 ready for 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +2s
  testcontainers INFO Container is ready +0ms
  testcontainers INFO Stopping container with ID: 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a +3ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       E2021-07-07 06:58:38.186 UTC [1] LOG:  received fast shutdown request
  testcontainers:containers  +360ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       G2021-07-07 06:58:38.191 UTC [1] LOG:  aborting any active transactions
  testcontainers:containers  +4ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       y2021-07-07 06:58:38.192 UTC [1] LOG:  background worker "logical replication launcher" (PID 141) exited with exit code 1
  testcontainers:containers  +1ms
  testcontainers:containers TRACE 5616b3592b0471de40e9746537fb5ed4c9ed49550d798058f03cff8057dbc29a:       62021-07-07 06:58:38.192 UTC [136] LOG:  shutting down
  testcontainers:containers  +1ms

````