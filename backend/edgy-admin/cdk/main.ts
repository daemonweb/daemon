import * as dotenv from 'dotenv';
dotenv.config();

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

import { DigitaloceanProvider } from "./.gen/providers/digitalocean/provider";
import { DataDigitaloceanSshKey } from "./.gen/providers/digitalocean/data-digitalocean-ssh-key";
import { Droplet } from "./.gen/providers/digitalocean/droplet";
// import { Loadbalancer } from "./.gen/providers/digitalocean/loadbalancer";


class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new DigitaloceanProvider(this, "provider");

    const sshKey = new DataDigitaloceanSshKey(this, "ssh-key", {
      name: "do_key"
    });

    // Used this as guide for initial server setup
    // https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8
    new Droplet(this, "postgres", {
      name: "postgres",
      image: "centos-stream-9-x64",
      size: "s-1vcpu-512mb-10gb",
      region: "nyc1",
      sshKeys: [sshKey.id.toString()],
      userData:`#!/bin/bash
        yum update -y
        adduser remote
        echo "remote:${process.env.REMOTE_DROPLET_PASS}" | chpasswd
        usermod -aG wheel remote
        dnf install firewalld -y
        systemctl start firewalld
        firewall-cmd --permanent --add-service=http
        firewall-cmd --reload
        rsync --archive --chown=remote:remote ~/.ssh /home/remote
      `,
    });
  }
}

const app = new App();
new MyStack(app, "cdk");
app.synth();



// new Loadbalancer(this, 'lb', {
//   name: 'default',
//   region: 'nyc1',
//   algorithm: 'round_robin',
//   forwardingRule: [{
//     entryProtocol: 'http',
//     entryPort: 80,
//     targetProtocol: 'http',
//     targetPort: 80,
//   }],
//   dropletIds: [Fn.tonumber(postgresDroplet.id)]
// })
