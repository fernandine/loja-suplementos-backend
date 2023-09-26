package br.com.fernandinesuplementos.loja.DTOs;

import java.io.Serializable;

public class FieldMessageDto implements Serializable {

    private String fieldName;
    private String message;

    public FieldMessageDto(String fieldName, String message) {
        this.fieldName = fieldName;
        this.message = message;
    }

    public String getFieldName() {
        return fieldName;
    }

    public String getMessage() {
        return message;
    }
}
