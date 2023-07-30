package br.com.fernandinesuplementos.loja.DTOs;

import java.time.Instant;

public class CustomErrorDto {

    private Instant timestamp;
    private Integer status;
    private String error;
    private String path;

    public CustomErrorDto(Instant timestamp, Integer status, String error, String path) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.path = path;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public Integer getStatus() {
        return status;
    }

    public String getError() {
        return error;
    }

    public String getPath() {
        return path;
    }
}
