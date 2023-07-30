package br.com.fernandinesuplementos.loja.services.exceptions;

@SuppressWarnings("serial")
public class DatabaseException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DatabaseException(String msg) {
		super(msg);
	}
}
